import React from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';
import { smartTruncate } from './helpers';
import { TruncatedTextProps } from './types/types';

export const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  size,
  mode = 'words',
  addEllipsis = true,
  enableTooltip = false,
  className,
}) => {
  // ------ MODE LINES -------------------------------------------------------
  if (mode === 'lines') {
    const clampStyles: React.CSSProperties = {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical' as any,
      WebkitLineClamp: size as any,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    };

    return (
      <span className={className} style={clampStyles} title={text} aria-label={text}>
        {text}
      </span>
    );
  }

  // ------ MODE WORDS (par défaut) -----------------------------------------
  const truncated = smartTruncate(text, size, addEllipsis);

  const Content = (
    <span className={className} title={text} aria-label={text}>
      {truncated}
    </span>
  );

  if (!enableTooltip) return Content;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{Content}</TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs wrap-break-word">{text}</p>
      </TooltipContent>
    </Tooltip>
  );
};

/**
 * EXEMPLES
 *
 * // ➜ Mode words (tooltip activable)
 * <TruncatedText text="Un long texte…" size={60} enableTooltip />
 *
 * // ➜ Mode lines (ellipsis auto, pas de tooltip)
 * <TruncatedText text={content} size={3} mode="lines" />
 */
