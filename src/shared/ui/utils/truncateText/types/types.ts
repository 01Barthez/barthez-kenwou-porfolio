// --- Types -----------------------------------------------------------------
export interface TruncatedTextProps {
  text: string;
  /**
   * words ➜ taille max du texte
   * lines ➜ nombre de lignes visibles
   */
  size: number;

  /** Mode de troncature (par défaut: words) */
  mode?: 'words' | 'lines';

  /** Ellipsis pour le mode words (dans lines c'est toujours forcé) */
  addEllipsis?: boolean;

  /** Tooltip (ignoré en mode lines) */
  enableTooltip?: boolean;

  className?: string;
}
