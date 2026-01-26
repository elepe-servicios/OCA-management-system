# Migration Guide: mgmtsystem_survey (18.0 → 19.0)

## Summary

This document describes the migration of the `mgmtsystem_survey` module from Odoo version 18.0 to 19.0, following the OCA (Odoo Community Association) migration guidelines.

## Migration Date

- **Date:** January 2026
- **Previous Version:** 18.0.1.0.0
- **New Version:** 19.0.1.0.0

## Changes Made

### 1. Manifest File (`__manifest__.py`)

- **Version bump:** Updated from `18.0.1.0.0` to `19.0.1.0.0`
- **Installable flag:** Changed from `False` to `True` to enable module installation

### 2. Credits File (`readme/CREDITS.md`)

- Removed references to past migration financial supporters as per OCA guidelines for new version migrations

### 3. Module Structure Analysis

The module was analyzed for compatibility with Odoo 19.0. The following elements were reviewed:

#### XML Views (`views/survey_survey.xml`)
- ✅ No deprecated attributes found
- ✅ Uses standard `ir.actions.act_window` record notation
- ✅ Menu item uses proper `groups` attribute (not deprecated `groups_id`)
- ✅ No changes required for view structure

#### Python Files (`__init__.py`)
- ✅ No business logic present (only license header)
- ✅ No deprecated API usage
- ✅ No changes required

#### Dependencies
- ✅ Dependencies (`mgmtsystem`, `survey`) are compatible with Odoo 19.0

## OCA Migration Checklist Applied

Based on the [OCA Migration to version 19.0 guidelines](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0):

| Task | Status | Notes |
|------|--------|-------|
| Bump module version to 19.0.1.0.0 | ✅ Done | Version updated in manifest |
| Remove migrations folder | ✅ N/A | No migrations folder existed |
| Remove past CREDITS.rst references | ✅ Done | Removed 17.0→18.0 migration credits |
| Replace `groups_id` by `group_ids` | ✅ N/A | Module uses `groups` attribute correctly |
| Replace `self._cr`, `self._uid`, `self._context` | ✅ N/A | No Python code uses these |
| Replace `odoo.osv.expression` by `Domain` | ✅ N/A | No domain expressions used |
| Replace `_sql_constraints` | ✅ N/A | No SQL constraints defined |
| Replace `auto_join` by `bypass_search_access` | ✅ N/A | Not used in module |
| Replace `read_group` by `_read_group` | ✅ N/A | Not used in module |
| Replace controller `type="json"` by `type="jsonrpc"` | ✅ N/A | No controllers defined |
| Set installable to True | ✅ Done | Module is now installable |

## Technical Notes

### Module Purpose
This module integrates the Management System (`mgmtsystem`) with Odoo's Survey module (`survey`), providing:
- A menu item in the Management System configuration to access surveys
- Access restricted to Management System managers

### Compatibility
- **Odoo Version:** 19.0
- **Python Version:** 3.10+ (as required by Odoo 19.0)
- **License:** AGPL-3

## Testing Recommendations

1. **Installation Test:** Install the module and verify no errors occur
2. **Menu Access Test:** Verify the "Surveys" menu appears under Management System → Configuration
3. **Permission Test:** Verify only users with `mgmtsystem.group_mgmtsystem_manager` can access the menu
4. **Survey Integration:** Create a survey and verify it appears in the Management System configuration

## References

- [OCA Migration Guidelines v19.0](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [OCA Conventions](https://odoo-community.org/page/contributing)
