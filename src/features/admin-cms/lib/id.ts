/** Tiny id helper for local CMS drafts until the API owns IDs. */
export function createId(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function ensureId<T extends object>(
  item: T & { id?: string },
  prefix: string,
): T & { id: string } {
  return { ...item, id: item.id || createId(prefix) };
}
