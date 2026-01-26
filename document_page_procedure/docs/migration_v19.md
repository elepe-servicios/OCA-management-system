# Migración de document_page_procedure a Odoo 19.0

## Resumen de la Migración

Este documento describe los cambios realizados para migrar el módulo `document_page_procedure` de Odoo 18.0 a Odoo 19.0, siguiendo los lineamientos oficiales de OCA.

## Cambios Realizados

### 1. Actualización del Archivo `__manifest__.py`

| Campo | Valor Anterior | Valor Nuevo |
|-------|----------------|-------------|
| `version` | `18.0.1.0.1` | `19.0.1.0.0` |
| `installable` | `False` | `True` |

### 2. Limpieza del Archivo `readme/CREDITS.md`

Según los lineamientos de migración de OCA, se eliminaron las referencias a migraciones anteriores financiadas por otras compañías. Este archivo ahora está vacío y puede ser actualizado con los créditos correspondientes a la migración actual si aplica.

### 3. Revisión de Archivos XML

Se revisaron los siguientes archivos XML en busca de cambios requeridos para V19:

- `data/document_page_procedure.xml` - ✅ Sin cambios necesarios
- `demo/document_page_procedure.xml` - ✅ Sin cambios necesarios
- `views/document_page_procedure.xml` - ✅ Sin cambios necesarios

**Notas de la revisión:**
- No se encontró uso de `groups_id` que deba cambiarse a `group_ids`
- El uso de `groups` en el menuitem es correcto y compatible con V19
- No se detectaron usos de `_sql_constraints` que deban migrarse a `models.Constraint`
- No hay uso de `auto_join` que deba cambiarse a `bypass_search_access`

## Verificaciones de Compatibilidad con V19

### Cambios del Framework V19 NO Aplicables a Este Módulo

Los siguientes cambios del framework de Odoo 19 fueron revisados pero no aplican a este módulo debido a su simplicidad:

| Cambio V19 | Estado |
|------------|--------|
| `groups_id` → `group_ids` | No aplica (no se usa) |
| `_sql_constraints` → `models.Constraint` | No aplica (no hay modelos) |
| `self._cr` → `self.env.cr` | No aplica (no hay código Python) |
| `odoo.osv.expression` → `odoo.fields.Domain` | No aplica (no hay código Python) |
| `auto_join` → `bypass_search_access` | No aplica (no hay fields) |
| `read_group` → `_read_group` | No aplica (no hay código Python) |
| `type="json"` → `type="jsonrpc"` | No aplica (no hay controllers) |
| `toggle_active` → `action_archive`/`action_unarchive` | No aplica |
| Decorador `@ormcache_context` | No aplica |

## Consideraciones Especiales

### Dependencias

El módulo depende de:
- `document_page` - Debe estar migrado a V19
- `mgmtsystem` - Debe estar migrado a V19

Asegúrese de que ambas dependencias estén disponibles y correctamente migradas a la versión 19.0 antes de instalar este módulo.

### Pruebas Recomendadas

1. Verificar la creación del menú "Procedures" bajo Management Systems > Documentation
2. Verificar que la categoría "Procedure" se cree correctamente con la plantilla definida
3. Verificar la creación de nuevos procedimientos usando la plantilla
4. Verificar la visualización de procedimientos en las vistas lista y formulario

### Estructura del Módulo

```
document_page_procedure/
├── __init__.py
├── __manifest__.py
├── pyproject.toml
├── README.rst
├── checklog-odoo.cfg
├── data/
│   └── document_page_procedure.xml
├── demo/
│   └── document_page_procedure.xml
├── docs/
│   └── migration_v19.md
├── i18n/
├── readme/
│   ├── CONFIGURE.md
│   ├── CONTRIBUTORS.md
│   ├── CREDITS.md
│   └── DESCRIPTION.md
├── static/
│   └── description/
│       ├── icon.png
│       └── index.html
└── views/
    └── document_page_procedure.xml
```

## Referencias

- [OCA Migration Guide V19](https://github.com/OCA/maintainer-tools/wiki/Migration-to-version-19.0)
- [Odoo 19.0 Coding Guidelines](https://www.odoo.com/documentation/19.0/contributing/development/coding_guidelines.html)
- [OCA Conventions](https://odoo-community.org/page/contributing)

## Fecha de Migración

- **Fecha:** Enero 2026
- **Versión origen:** 18.0.1.0.1
- **Versión destino:** 19.0.1.0.0
