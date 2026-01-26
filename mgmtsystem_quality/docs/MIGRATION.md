# Migration Guide: mgmtsystem_quality v18.0 → v19.0

## Summary of Changes

This document describes the migration of the `mgmtsystem_quality` module from Odoo 18.0 to Odoo 19.0, following the OCA (Odoo Community Association) migration guidelines.

## Migration Date

January 2026

## Changes Made

### 1. Module Version Update (`__manifest__.py`)

| Field | Before | After |
|-------|--------|-------|
| `version` | `18.0.1.0.1` | `19.0.1.0.0` |
| `installable` | `False` | `True` |

### 2. XML Data Files Review

The data file `data/mgmtsystem_system.xml` was reviewed and found to be compliant with Odoo 19.0 guidelines:

- Uses proper `noupdate="1"` attribute on the `<odoo>` tag
- Record declaration follows the convention with `id` before `model`
- Field declarations have the `name` attribute first
- No deprecated patterns found

### 3. Dependencies Status

All dependencies are compatible with Odoo 19.0:

- `mgmtsystem_manual` - Required for manual management
- `mgmtsystem_audit` - Required for audit management
- `document_page_quality_manual` - Required for quality manual documentation
- `mgmtsystem_review` - Required for top management reviews

## OCA Migration Guidelines Applied

The following OCA V19 migration guidelines were considered:

1. ✅ **Version bump**: Changed to `19.0.1.0.0`
2. ✅ **Installable flag**: Set to `True`
3. ✅ **No migration scripts**: Module has no migration scripts from previous versions
4. ✅ **XML Review**: Checked for `groups_id` → `group_ids` changes (not applicable)
5. ✅ **Internal variables**: No usage of deprecated `self._cr`, `self._uid`, `self._context`
6. ✅ **Domain expressions**: No domain expressions requiring migration to `odoo.fields.Domain`
7. ✅ **SQL constraints**: No `_sql_constraints` requiring migration to `models.Constraint`

## Special Considerations

### Module Purpose

This module integrates various management system modules to provide a complete Quality Management System (QMS) solution for ISO compliance. It bundles:

- Quality Manual management
- Procedures and Work Instructions
- Top Management Reviews
- Audits
- Nonconformities (NC)
- Immediate/Corrective/Preventive Actions
- Improvement Opportunities
- Satisfaction Survey

### Configuration Requirements

After installation, users should:

1. Add users to the Management System groups (Manager, Auditor, NC Approver)
2. Import documentation (manuals and procedures)
3. Review the data provided (NC origins and causes)
4. Customize the Customer Satisfaction survey
5. Customize email templates for reminders

### Roadmap / Known Limitations

The following features are planned for future development:

- Images support in the documentation
- Key Performance Indicators
- Employee Training
- Equipment Management

## Testing Recommendations

1. Verify all dependent modules are migrated and installed
2. Test the creation of quality management records
3. Verify the "Quality" system entry is created correctly
4. Test audit and review workflows
5. Validate nonconformity and action management

## References

- [OCA Migration Guidelines V19](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [OCA Conventions](https://odoo-community.org/page/contributing)

## Contributors

Migration performed following OCA best practices.
