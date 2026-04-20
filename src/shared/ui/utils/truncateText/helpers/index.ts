// --- Helpers ---------------------------------------------------------------
export function smartTruncate(text: string, size: number, addEllipsis: boolean) {
  if (!text || size <= 0) return '';
  if (text.length <= size) return text;

  let trimmed = text.slice(0, size);
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace > 0) trimmed = trimmed.slice(0, lastSpace);

  return addEllipsis ? `${trimmed}…` : trimmed;
}

// --- Exported Function -------------------------------------------------------
export const truncateFonction = (text: string, size: number, addEllipsis = true) =>
  smartTruncate(text, size, addEllipsis);
