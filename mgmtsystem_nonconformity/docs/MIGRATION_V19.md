# Migration Guide: mgmtsystem_nonconformity v18.0 → v19.0

## Overview

This document summarizes the migration of the `mgmtsystem_nonconformity` module from Odoo 18.0 to Odoo 19.0, following the [OCA Migration Guidelines](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0) and [Odoo Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html).

## Migration Date

January 2026

## Version Changes

- **Previous Version:** 18.0.1.3.0
- **New Version:** 19.0.1.0.0

## Summary of Changes

### 1. Manifest Updates (`__manifest__.py`)

- Updated module version from `18.0.1.3.0` to `19.0.1.0.0`
- Set `"installable": True` to enable installation in Odoo 19.0

### 2. Removed Old Migration Scripts

- Removed the `migrations/` folder containing migration scripts from version 16.0.1.1.0
- As per OCA guidelines, migration scripts from previous versions should be removed when migrating to a new major version

### 3. Python Code Updates

#### `_read_group` Method Signature Update

The `_read_group` method signature changed in Odoo 19.0 ([odoo/odoo#163300](https://github.com/odoo/odoo/pull/163300)).

**File:** `models/mail_thread.py`

**Before (v18.0):**
```python
self.env["mgmtsystem.nonconformity"]._read_group(
    [("res_model", "=", self._name), ("res_id", "in", self.ids)],
    ["res_id"],
    ["res_id:count"],
)
```

**After (v19.0):**
```python
self.env["mgmtsystem.nonconformity"]._read_group(
    [("res_model", "=", self._name), ("res_id", "in", self.ids)],
    groupby=["res_id"],
    aggregates=["__count"],
)
```

### 4. Test Updates

#### `read_group` to `formatted_read_group`

In Odoo 19.0, the public `read_group` method was replaced by `formatted_read_group` for external/public calls and `_read_group` for backend processes.

**File:** `tests/test_nonconformity.py`

**Before (v18.0):**
```python
group_stages = self.nc_test.read_group(
    domain=[], fields=["stage_id"], groupby=["stage_id"]
)
```

**After (v19.0):**
```python
group_stages = self.nc_test.formatted_read_group(
    domain=[], fields=["stage_id"], groupby=["stage_id"]
)
```

## Files Modified

| File | Type of Change |
|------|----------------|
| `__manifest__.py` | Version bump, installable flag |
| `models/mail_thread.py` | `_read_group` method signature update |
| `tests/test_nonconformity.py` | `read_group` → `formatted_read_group` |

## Files Removed

| File/Folder | Reason |
|-------------|--------|
| `migrations/16.0.1.1.0/` | Old migration scripts from previous version |

## Compatibility Notes

### Dependencies

This module depends on:
- `mgmtsystem_action`
- `document_page_procedure`

Ensure these modules are also migrated to version 19.0 before installing this module.

### No Breaking Changes

The module's core functionality remains unchanged. All modifications were related to API updates between Odoo 18.0 and 19.0.

## Testing Recommendations

1. **Run all module tests:**
   ```bash
   odoo-bin -d test_db -i mgmtsystem_nonconformity --test-enable --stop-after-init
   ```

2. **Verify key workflows:**
   - Create a new nonconformity
   - Move through stages (Draft → Analysis → Action Plan → In Progress → Closed)
   - Verify that actions are properly linked and opened when plan is approved
   - Check kanban view grouping by stages

3. **Verify JavaScript components:**
   - Test the chatter topbar non-conformity button functionality
   - Ensure non-conformity count is displayed correctly

## Additional References

- [OCA Migration to version 19.0 Wiki](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [Odoo read_group API changes PR #163300](https://github.com/odoo/odoo/pull/163300)

## Contributors

- Migration performed following OCA standards and best practices
