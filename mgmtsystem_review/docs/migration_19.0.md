# Migration Guide: mgmtsystem_review from 18.0 to 19.0

## Overview

This document summarizes the migration of the `mgmtsystem_review` module from Odoo 18.0 to 19.0, following OCA (Odoo Community Association) migration guidelines.

## Migration Date

January 2026

## Changes Made

### 1. Manifest Updates (`__manifest__.py`)

- **Version Bump**: Changed version from `18.0.2.0.1` to `19.0.1.0.0`
- **Installable Flag**: Set `installable` to `True` (was `False`)

### 2. Credit Updates (`readme/CREDITS.md`)

- Removed reference to the previous version migration (17.0 to 18.0) as per OCA guidelines

### 3. Test Improvements (`tests/test_create_review.py`)

- Added `tracking_disable=True` to the test environment context to improve test performance and avoid mail tracking overhead during tests, following V19 best practices
- The test class already inherits from `BaseCommon` which is the recommended base class for tests in Odoo 19.0

## V19-Specific Changes Review

The following V19 migration checklist items were verified:

| Item | Status | Notes |
|------|--------|-------|
| `groups_id` → `group_ids` | ✅ N/A | No `groups_id` usage found in module |
| `self._cr` → `self.env.cr` | ✅ N/A | Not used in module |
| `self._uid` → `self.env.uid` | ✅ N/A | Not used in module |
| `self._context` → `self.env.context` | ✅ N/A | Not used in module |
| `_sql_constraints` → `models.Constraint` | ✅ N/A | No SQL constraints defined |
| `auto_join` → `bypass_search_access` | ✅ N/A | Not used in module |
| `read_group` → `_read_group`/`formatted_read_group` | ✅ N/A | Not used in module |
| `type="json"` → `type="jsonrpc"` | ✅ N/A | No controllers in module |
| `toggle_active` → `action_archive`/`action_unarchive` | ✅ N/A | Not used in module |
| Timezone manipulations | ✅ N/A | Not used in module |
| `odoo.osv.expression` → `odoo.fields.Domain` | ✅ N/A | Not used in module |
| Test environment with `tracking_disable` | ✅ Applied | Added to test setup |

## Dependencies

This module depends on:
- `mgmtsystem_nonconformity` - Must also be migrated to 19.0

## Database Migration

No database migration scripts are required for this module. The data model remains unchanged from 18.0 to 19.0.

## Testing

After installation, verify:
1. Reviews can be created, viewed, and closed
2. Review lines work correctly with actions and nonconformities
3. The review report generates properly
4. Multi-company rules function as expected

## Considerations

- The module inherits from `mail.thread` and `mail.activity.mixin`, which have been updated in V19, but no explicit changes are needed as Odoo handles backward compatibility
- The module uses `BaseCommon` for tests which is the recommended test base class in V19

## OCA Migration Guidelines Reference

This migration follows the guidelines documented at:
- https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0
- https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html

## Authors

- Original Authors: Savoir-faire Linux
- Migration: OCA Contributors
