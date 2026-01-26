# Migration Summary: document_page_quality_manual (V18 → V19)

## Overview

This document summarizes the migration of the `document_page_quality_manual` module from Odoo 18.0 to 19.0, following the OCA (Odoo Community Association) migration guidelines.

**Migration Date:** January 26, 2026  
**Previous Version:** 18.0.1.0.1  
**New Version:** 19.0.1.0.0

---

## Changes Applied

### 1. Version Bump (`__manifest__.py`)
- Updated `version` from `18.0.1.0.1` to `19.0.1.0.0`
- Changed `installable` from `False` to `True`

### 2. Credits Cleanup (`readme/CREDITS.md`)
- Removed references to past migration credits (17.0 → 18.0 financed by Camptocamp) as per OCA guidelines for new migrations

### 3. Documentation Updates (`README.rst`)
- Updated GitHub repository badge URL to point to `19.0` branch
- Updated Weblate translation link to use `management-system-19-0` project
- Updated Runboat "Try me" link to target `19.0` branch
- Updated Bug Tracker feedback URL to reference version `19.0`

---

## OCA Migration Guidelines Applied

The following guidelines from the [OCA Migration to version 19.0 wiki](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0) were followed:

| Guideline | Status | Notes |
|-----------|--------|-------|
| Bump module version to `19.0.1.0.0` | ✅ Done | Version format: `{odoo_version}.{major}.{minor}.{patch}` |
| Remove migration scripts from previous version | ✅ N/A | No `migrations` folder existed |
| Remove past migration credits | ✅ Done | Removed 17.0→18.0 migration credits |
| Set `installable` to `True` | ✅ Done | Module is now installable |
| Check for `groups_id` → `group_ids` changes | ✅ N/A | No group references in this module |
| Check for `_sql_constraints` → `models.Constraint` | ✅ N/A | No SQL constraints in this module |
| Check for `self._cr`, `self._uid`, `self._context` replacements | ✅ N/A | No Python models in this module |
| Check for `odoo.osv.expression` → `odoo.fields.Domain` | ✅ N/A | No domain expressions in this module |
| Check for `read_group` → `_read_group`/`formatted_read_group` | ✅ N/A | No read_group calls |
| Check for `auto_join` → `bypass_search_access` | ✅ N/A | No auto_join parameters |
| Check for `type="json"` → `type="jsonrpc"` in controllers | ✅ N/A | No controllers in this module |
| Check for `toggle_active` → `action_archive`/`action_unarchive` | ✅ N/A | No toggle_active usage |

---

## Module Structure

```
document_page_quality_manual/
├── __init__.py              # Module initialization
├── __manifest__.py          # Module manifest (UPDATED)
├── pyproject.toml           # Python project configuration
├── README.rst               # Module documentation (UPDATED)
├── data/
│   └── document_page.xml    # Quality manual template data
├── docs/
│   └── MIGRATION_V19.md     # This migration documentation (NEW)
├── i18n/                    # Translation files
├── readme/
│   ├── CONFIGURE.md
│   ├── CONTRIBUTORS.md
│   ├── CREDITS.md           # Migration credits (UPDATED)
│   ├── DESCRIPTION.md
│   └── USAGE.md
└── static/
    └── description/         # Module images
```

---

## Special Considerations

### Module Dependencies
This module depends on `mgmtsystem_manual`, which must also be migrated to V19 before this module can be installed.

### Data Files
The `data/document_page.xml` file contains the Quality Manual template structure following ISO 9001 standard. No changes were required as the XML structure is compatible with Odoo 19.0.

### No Python Models
This module is a data-only module that provides a document page template. It has no Python models, controllers, or business logic, which simplifies the migration process.

### Translations
The `i18n/` folder contains translation files. These should be reviewed after migration to ensure compatibility with any new translation infrastructure changes in Odoo 19.0.

---

## Testing Recommendations

1. **Installation Test**: Verify the module installs without errors on a fresh Odoo 19.0 database
2. **Dependency Check**: Ensure `mgmtsystem_manual` and its dependencies are installed first
3. **Data Integrity**: Verify the Quality Manual category is created correctly with the ISO 9001 template structure
4. **UI Test**: Navigate to Management Systems > Configuration > Categories and verify the Quality Manual appears

---

## References

- [OCA Migration to version 19.0 Guide](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [OCA Conventions](https://odoo-community.org/page/contributing)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [OCA Management System Repository](https://github.com/OCA/management-system)

---

## Commit Message Format

For the migration commit, use the following format as per OCA conventions:

```
[MIG] document_page_quality_manual: Migration to 19.0
```
