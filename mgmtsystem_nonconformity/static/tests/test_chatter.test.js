import {
    contains,
    defineMailModels,
    listenStoreFetch,
    mailModels,
    openFormView,
    start,
    startServer,
    waitStoreFetch,
} from "@mail/../tests/mail_test_helpers";

import {getKwArgs, makeKwArgs} from "@web/../tests/web_test_helpers";
import {describe, test} from "@odoo/hoot";

class MailThreadNonConformity extends mailModels.MailThread {
    _thread_to_store(store, fields, request_list) {
        const kwargs = getKwArgs(arguments, "store", "fields", "request_list");
        store = kwargs.store;
        fields = kwargs.fields;
        request_list = kwargs.request_list || [];
        const result = super._thread_to_store(store, fields, request_list);
        const thread = this[0];
        if (thread) {
            store._add_record_fields(
                this.env[this._name].browse(thread.id),
                {
                    non_conformity_count: 0,
                },
                makeKwArgs({as_thread: true})
            );
        }
        return result;
    }
}

Object.assign(mailModels, {MailThread: MailThreadNonConformity});
defineMailModels();

describe.current.tags("desktop");

test("simple chatter on a record", async () => {
    const pyEnv = await startServer();
    listenStoreFetch();
    await start();
    await waitStoreFetch(["failures", "systray_get_activities", "init_messaging"]);
    const partnerId = pyEnv["res.partner"].create({name: "John Doe"});
    await openFormView("res.partner", partnerId);
    await contains(".o-mail-Chatter-topbar");
    await contains(".o-mail-Thread");
    await waitStoreFetch(["mail.thread"]);
    await contains(".o_ChatterTopbar_buttonNonConformities");
});
