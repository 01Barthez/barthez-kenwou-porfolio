# Menu Browse

This feature lists dishes and allows filtering and selection.

Location: `src/features/menu-browse`

Key files:

- `model/menu.service.ts` — API calls for menu items.
- `model/useMenuBrowse.ts` — data-loader hook.
- `ui/MenuList.ui.tsx` — list UI.

Performance:

- Paginate or infinite-load for large menus.
- Prefetch item details on hover if you need faster details view.
