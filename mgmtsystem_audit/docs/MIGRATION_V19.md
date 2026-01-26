# Migration Guide: mgmtsystem_audit V18 → V19

## Overview

This document describes the migration of the `mgmtsystem_audit` module from Odoo version 18.0 to 19.0, following OCA (Odoo Community Association) guidelines.

**Migration Date:** January 2026  
**Previous Version:** 18.0.1.1.0  
**New Version:** 19.0.1.0.0

## Changes Summary

### 1. Version Bump

- Updated module version from `18.0.1.1.0` to `19.0.1.0.0`
- Set `installable` to `True` in `__manifest__.py`

### 2. Python Code Changes

#### 2.1 Context Access Pattern (OCA V19 Migration Guideline)

**File:** `wizard/copy_verification_lines.py`

Replaced deprecated internal variable `self._context` with `self.env.context`:

```python
# Before (V18)
audit_proxy = self.env[self._context.get("active_model")]
audit_id = self._context.get("active_id")

# After (V19)
audit_proxy = self.env[self.env.context.get("active_model")]
audit_id = self.env.context.get("active_id")
```

This change follows the V19 migration guideline that recommends replacing:
- `self._cr` → `self.env.cr`
- `self._uid` → `self.env.uid`
- `self._context` → `self.env.context`

### 3. XML View Changes

#### 3.1 Removed Deprecated Form Version Attribute

**File:** `views/mgmtsystem_audit.xml`

Removed obsolete `version="7.0"` attribute from form view:

```xml
<!-- Before -->
<form string="Audit" version="7.0">

<!-- After -->
<form string="Audit">
```

#### 3.2 Removed Deprecated Icon Attributes

**File:** `views/mgmtsystem_audit.xml`

Removed deprecated `icon="terp-*"` attributes from search view filters:

```xml
<!-- Before -->
<filter
    name="current"
    icon="terp-document-new"
    domain="[('state','=','open')]"
    ...
/>

<!-- After -->
<filter
    name="current"
    domain="[('state','=','open')]"
    ...
/>
```

These icons were from very old Odoo versions and are no longer supported.

## Items Verified (No Changes Required)

### Python Code

- ✅ No `_sql_constraints` found (no need to migrate to `models.Constraint`)
- ✅ No deprecated `@api.multi` or `@api.one` decorators
- ✅ No `osv.expression` usage (no need to migrate to `fields.Domain`)
- ✅ No `read_group` public calls (no migration to `_read_group` needed)
- ✅ No `auto_join` field parameter usage
- ✅ No `pytz` or manual timezone manipulation
- ✅ No `toggle_active` method usage

### XML Files

- ✅ No `groups_id` attribute usage (already using correct format)
- ✅ No deprecated `attrs` or `states` attributes
- ✅ Views already use `list` view type (not deprecated `tree`)

### Tests

- ✅ Tests already use `BaseCommon` class from `odoo.addons.base.tests.common`
- ✅ Tests are compatible with V19 testing framework
- ✅ Uses `Command` for record creation in tests

### Other

- ✅ No migration scripts from previous versions to remove
- ✅ No `CREDITS.rst` file with past financed migration references

## Dependencies

The module depends on:
- `mgmtsystem_nonconformity`
- `base_automation`

Ensure these dependencies are also migrated to V19 before installing this module.

## Testing Recommendations

1. Run the module tests to verify functionality:
   ```bash
   odoo --test-enable -i mgmtsystem_audit --stop-after-init
   ```

2. Test the following features manually:
   - Create a new audit
   - Add verification lines
   - Copy verification lines from another audit
   - Close an audit
   - Generate audit and verification reports

## Additional Notes

### OCA Guidelines Applied

This migration follows the OCA Migration Guide for V19:
https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0

### Odoo Coding Guidelines

The code adheres to Odoo 19.0 development best practices:
https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html

## Commit Message

The recommended commit message for this migration follows OCA conventions:

```
[MIG] mgmtsystem_audit: Migration to 19.0
```
