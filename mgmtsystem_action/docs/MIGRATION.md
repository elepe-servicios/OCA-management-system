# Migration to V19.0

## Summary

This document describes the migration of the `mgmtsystem_action` module from Odoo V18 to V19, following the OCA (Odoo Community Association) migration guidelines.

## Migration Date

- **Migration performed:** January 2026
- **Previous version:** 18.0.1.0.1
- **New version:** 19.0.1.0.0

## Changes Applied

### 1. Version Bump (`__manifest__.py`)

- Updated `version` from `18.0.1.0.1` to `19.0.1.0.0`
- Changed `installable` from `False` to `True`

### 2. SQL Constraints to models.Constraint (`models/mgmtsystem_action_tag.py`)

Following the new Odoo V19 pattern, the `_sql_constraints` class variable has been replaced with the new `_constraints` syntax using `models.Constraint`.

**Before (V18):**
```python
_sql_constraints = [("name_uniq", "unique (name)", "Tag name already exists !")]
```

**After (V19):**
```python
_constraints = [
    models.Constraint(
        "unique (name)",
        "Tag name already exists !",
    ),
]
```

For more information, see: [odoo/odoo#175783](https://github.com/odoo/odoo/pull/175783)

### 3. Internal Variables Update (`reports/mgmtsystem_action_report.py`)

Replaced deprecated internal variable `self._cr` with `self.env.cr` as per Odoo V19 guidelines.

**Before (V18):**
```python
tools.drop_view_if_exists(self._cr, "mgmtsystem_action_report")
```

**After (V19):**
```python
tools.drop_view_if_exists(self.env.cr, "mgmtsystem_action_report")
```

## Items Reviewed (No Changes Required)

The following items were reviewed as part of the migration process but did not require any changes:

### XML Views

- **`groups_id` to `group_ids`:** Reviewed all XML files - no instances of `groups_id` field that needed to be changed to `group_ids`

### Python Code

- **`self._uid`:** No instances found - already using `self.env.uid` or `self.env.user`
- **`self._context`:** No instances found - already using `self.env.context`
- **`auto_join` parameter:** Not used in this module
- **`toggle_active` method:** Not used in this module
- **`read_group` method:** Not used in this module
- **`type="json"` in controllers:** No controllers in this module

### Other

- **Migrations folder:** No existing migrations folder to remove
- **CREDITS.md:** No past migration sponsorship references to remove

## OCA Guidelines Reference

This migration follows the OCA guidelines for migrating to version 19.0:
- [OCA Migration to V19.0 Guidelines](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)

## Key V19 Migration Tasks (from OCA Guidelines)

The following tasks from the OCA V19 migration guidelines were applicable to this module:

1. ✅ Bump module version to `19.0.1.0.0`
2. ✅ Remove any possible migration script from previous version (none existed)
3. ✅ Replace `_sql_constraints` with `models.Constraint`
4. ✅ Replace internal variables: `self._cr` → `self.env.cr`
5. ✅ Review XML files for `groups_id` → `group_ids` (no changes needed)
6. ✅ Add tests with `tracking_disable=True` (already implemented)

## Testing Recommendations

After migration, ensure to run the following tests:

```bash
# Run module tests
odoo-bin -c odoo.conf -d test_db -i mgmtsystem_action --test-enable --stop-after-init

# Or using pytest-odoo
pytest --odoo-database=test_db addons/mgmtsystem_action/tests/
```

## Dependencies

This module depends on:
- `mgmtsystem` (must be migrated first)
- `mail` (Odoo core module)

Ensure all dependencies are properly migrated to V19 before installing this module.

## Known Issues

None at the time of migration.

## Contributors

- Migration performed following OCA guidelines
