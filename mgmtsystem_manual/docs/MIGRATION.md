# Migration Guide: mgmtsystem_manual

## Migration from 18.0 to 19.0

### Summary

This document describes the changes made during the migration of the `mgmtsystem_manual` module from Odoo 18.0 to 19.0, following the [OCA Migration Guidelines](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0).

### Changes Made

#### 1. Version Bump
- **File:** `__manifest__.py`
- **Change:** Updated version from `18.0.1.0.1` to `19.0.1.0.0`
- **Change:** Set `installable` from `False` to `True`

#### 2. CREDITS.md Cleanup
- **File:** `readme/CREDITS.md`
- **Change:** Removed references to past financed migrations as per OCA migration guidelines

### No Changes Required

The following aspects of the module were reviewed and found to be already compatible with Odoo 19.0:

#### Python Code (`models/mgmtsystem_manual.py`)
- ✅ No usage of deprecated `self._cr`, `self._uid`, or `self._context` (should use `self.env.cr`, `self.env.uid`, `self.env.context`)
- ✅ No `_sql_constraints` to migrate to `models.Constraint`
- ✅ No `toggle_active` method usage (replaced by `action_archive`/`action_unarchive` in V19)
- ✅ No `read_group` calls to migrate to `_read_group` or `formatted_read_group`
- ✅ No `odoo.osv.expression` usage to migrate to `odoo.fields.Domain`
- ✅ No timezone manipulations requiring migration to `self.env.tz`
- ✅ No `auto_join` field parameter to migrate to `bypass_search_access`
- ✅ Model structure follows Odoo coding guidelines

#### XML Files
- ✅ No `groups_id` field usage (V19 renamed to `group_ids` in several models)
- ✅ Menu items correctly use `groups` attribute
- ✅ Actions and views follow proper naming conventions
- ✅ Data files use proper `noupdate` attribute structure

### Dependencies

This module depends on:
- `document_page`
- `mgmtsystem`

Ensure these dependencies are also migrated to version 19.0 before installing this module.

### Post-Migration Considerations

1. **Testing:** After installation, verify that:
   - The "Manuals" menu appears under the Management System menu
   - The "Categories" configuration menu is accessible for managers
   - The manual_id field is visible on management system records
   - Creating and editing manual pages works correctly

2. **Data Migration:** This module does not include data migration scripts as no schema changes were required.

3. **Compatibility:** This module is designed to work with Odoo 19.0 Community and Enterprise editions.

### References

- [OCA Migration Guidelines for 19.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [OCA Contributing Guide](https://odoo-community.org/page/contributing)

### Migration Date

- **Migrated:** January 2026
- **Previous Version:** 18.0.1.0.1
- **New Version:** 19.0.1.0.0
