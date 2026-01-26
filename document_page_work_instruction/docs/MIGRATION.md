# Migration to 19.0 - document_page_work_instruction

## Summary

This document describes the migration of the `document_page_work_instruction` module from Odoo version 18.0 to 19.0, following the OCA (Odoo Community Association) migration guidelines.

## Migration Date

January 2026

## Changes Made

### 1. Version Bump

- **Before**: `18.0.1.0.1`
- **After**: `19.0.1.0.0`

The version was updated to follow Odoo's versioning convention for v19.0.

### 2. Installable Flag

- **Before**: `"installable": False`
- **After**: `"installable": True`

The module is now marked as installable for the 19.0 version.

### 3. CREDITS.md Cleanup

Removed references to past migration sponsorships as per OCA guidelines (section "Tasks to do in the migration" - "Remove references in CREDITS.rst of past financed migrations by other companies").

### 4. XML Files Review

The following XML files were reviewed for V19 compatibility:

- `data/document_page.xml`: No changes required. The file uses standard record syntax compatible with V19.
- `views/document_page_work_instructions.xml`: No changes required. The file defines window actions, action views, and menu items using standard syntax compatible with V19.

**Note**: No `groups_id` to `group_ids` migration was needed as the module does not use this field in its XML files.

## Dependencies

This module depends on:

- `document_page`: Provides the base document page functionality
- `mgmtsystem`: Provides the management system menu structure

Ensure these dependencies are also migrated to version 19.0 before installing this module.

## Special Considerations

### No Breaking Changes

This module is a simple document page category definition with associated menu items and window actions. The module:

1. Creates a "Work Instructions" document page category with a predefined template
2. Defines a window action to list/manage work instruction documents
3. Adds a menu item under the Management System > Manuals section

No Python models, controllers, or complex business logic are present in this module, which simplifies the migration process.

### Compatibility Notes

- The module uses `noupdate="1"` for its data file, meaning the Work Instructions category will only be created on first installation and won't be overwritten on module updates.
- The menu item is accessible to users with the `base.group_user` group (Internal Users).

## OCA Migration Guidelines Reference

This migration follows the guidelines documented at:
- https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0

## Odoo Coding Guidelines Reference

The module structure and code follow the Odoo coding guidelines:
- https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html

## Testing

After migration, verify:

1. [ ] Module installation completes without errors
2. [ ] "Work Instructions" menu item appears under Management System > Manuals
3. [ ] Creating a new Work Instruction document works correctly
4. [ ] The document inherits the template with Step 1, Step 2, Step 3 headers
5. [ ] List and form views display correctly

## Maintainers

For issues related to this migration, please refer to:
- GitHub Repository: https://github.com/OCA/management-system
