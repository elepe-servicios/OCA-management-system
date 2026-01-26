# Migration Guide: mgmtsystem_hazard v18.0 → v19.0

## Overview

This document describes the changes made to migrate the `mgmtsystem_hazard` module from Odoo 18.0 to Odoo 19.0, following OCA (Odoo Community Association) migration guidelines.

**Migration Date:** January 2026  
**Previous Version:** 18.0.1.1.0  
**New Version:** 19.0.1.0.0

## Changes Made

### 1. Manifest Updates (`__manifest__.py`)

| Change | Before | After |
|--------|--------|-------|
| Version | `18.0.1.1.0` | `19.0.1.0.0` |
| Installable | `False` | `True` |

### 2. XML Views Updates - `groups` → `group_ids`

According to the OCA migration guidelines for v19.0, the `groups` field has been replaced by `group_ids` in menuitem declarations. This change affects the following technical models: `res.users`, `ir.ui.view`, `ir.ui.menu`, `ir.actions`, `ir.actions.report`, and `website.page.properties`.

**Reference:** [odoo/odoo#179354](https://github.com/odoo/odoo/pull/179354)

#### Files Modified:

| File | Changes |
|------|---------|
| `views/mgmtsystem_hazard.xml` | Updated `menu_mgmtsystem_configuration_hazards` and `menu_open_hazard` menuitems |
| `views/mgmtsystem_hazard_origin.xml` | Updated `menu_open_hazard_origin` menuitem |
| `views/mgmtsystem_hazard_probability.xml` | Updated `menu_open_hazard_probability` menuitem |
| `views/mgmtsystem_hazard_severity.xml` | Updated `menu_open_hazard_severity` menuitem |
| `views/mgmtsystem_hazard_type.xml` | Updated `menu_open_hazard_type` menuitem |
| `views/mgmtsystem_hazard_usage.xml` | Updated `menu_open_hazard_usage` menuitem |

#### Example of Change:

**Before (v18.0):**
```xml
<menuitem
    id="menu_mgmtsystem_configuration_hazards"
    name="Hazards"
    parent="mgmtsystem.menu_mgmtsystem_configuration"
    groups="mgmtsystem.group_mgmtsystem_manager"
    sequence="10"
/>
```

**After (v19.0):**
```xml
<menuitem
    id="menu_mgmtsystem_configuration_hazards"
    name="Hazards"
    parent="mgmtsystem.menu_mgmtsystem_configuration"
    group_ids="mgmtsystem.group_mgmtsystem_manager"
    sequence="10"
/>
```

## No Changes Required

The following aspects of the module were reviewed and did not require changes:

### Python Code (Models)

- No usage of deprecated `_sql_constraints` (module doesn't define SQL constraints)
- No usage of `self._cr`, `self._uid`, or `self._context` (already using `self.env.*`)
- No usage of `odoo.osv.expression` (no complex domain manipulation)
- No usage of `auto_join` parameter in field definitions
- No usage of `read_group` method
- No usage of `toggle_active` method
- No timezone manipulation with pytz
- No usage of `@ormcache_context` decorator

### XML/Views

- No usage of deprecated view structures
- Field definitions are compatible with v19.0

### Security

- Access rights in `ir.model.access.csv` are compatible
- Security rules in `mgmtsystem_hazard_security.xml` are compatible

## Dependencies

This module depends on:
- `mgmtsystem` (core management system module)
- `hr` (Human Resources module)

Ensure these dependencies are also migrated to version 19.0 before installing this module.

## Testing Recommendations

1. **Install the module** on a fresh Odoo 19.0 database
2. **Verify menu access** - Check that all menu items are visible for the appropriate user groups
3. **Create test records** for:
   - Hazard types
   - Hazard origins
   - Hazard probabilities
   - Hazard severities
   - Hazard usages
   - Hazards (main model)
4. **Test multi-company rules** if applicable
5. **Verify mail thread functionality** (chatter on hazard form)

## References

- [OCA Migration to version 19.0 Guide](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [groups → group_ids Change PR](https://github.com/odoo/odoo/pull/179354)

## Contributors

- Migration performed following OCA best practices and guidelines
