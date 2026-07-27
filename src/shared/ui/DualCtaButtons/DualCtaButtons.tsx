import React from 'react';
import { Link } from 'react-router-dom';
import { SpectrumButton } from '@/shared/ui/SpectrumButton';
import { ShimmerButton } from '@/shared/ui/ShimmerButton';
import { useThemeStore } from '@/shared/state/useThemeStore';
import { cn } from '@/shared/lib';

export type DualCtaItem = {
  label: React.ReactNode;
  /** Internal route, absolute URL, or mailto: */
  to?: string;
  /** Prefer for WhatsApp / external sites */
  external?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export type DualCtaButtonsProps = {
  primary: DualCtaItem;
  secondary: DualCtaItem;
  className?: string;
};

function isExternalHref(to: string, external?: boolean) {
  return (
    Boolean(external) ||
    to.startsWith('http://') ||
    to.startsWith('https://') ||
    to.startsWith('mailto:') ||
    to.startsWith('tel:')
  );
}

function ItemBody({ item }: { item: DualCtaItem }) {
  return (
    <>
      {item.icon}
      <span>{item.label}</span>
      {item.endIcon}
    </>
  );
}

function LinkedAction({
  item,
  as: Wrapper,
  wrapperProps,
}: {
  item: DualCtaItem;
  as: React.ElementType;
  wrapperProps?: Record<string, unknown>;
}) {
  const to = item.to ?? '#';
  const body = <ItemBody item={item} />;

  if (isExternalHref(to, item.external)) {
    const isMailOrTel = to.startsWith('mailto:') || to.startsWith('tel:');
    return (
      <Wrapper asChild {...wrapperProps}>
        <a
          href={to}
          target={isMailOrTel ? undefined : '_blank'}
          rel={isMailOrTel ? undefined : 'noopener noreferrer'}
          onClick={item.onClick}
        >
          {body}
        </a>
      </Wrapper>
    );
  }

  return (
    <Wrapper asChild {...wrapperProps}>
      <Link to={to} onClick={item.onClick}>
        {body}
      </Link>
    </Wrapper>
  );
}

/**
 * Shared dual CTA — Spectrum (primary) + Shimmer (secondary).
 * Reuse across CTA sections; only labels / destinations change.
 */
export const DualCtaButtons: React.FC<DualCtaButtonsProps> = ({
  primary,
  secondary,
  className,
}) => {
  const theme = useThemeStore((s) => s.theme);
  const isDark = theme === 'dark';

  const shimmerProps = {
    className: 'min-h-10',
    borderWidth: 1.5,
    background: isDark ? 'hsl(270 22% 7%)' : 'hsl(0 0% 100%)',
    shimmerColor: isDark ? '#e9d5ff' : '#7c3aed',
  };

  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4',
        className,
      )}
    >
      {primary.onClick && !primary.to ? (
        <SpectrumButton type="button" variant="solid" size="default" onClick={primary.onClick}>
          <ItemBody item={primary} />
        </SpectrumButton>
      ) : (
        <LinkedAction
          item={primary}
          as={SpectrumButton}
          wrapperProps={{ variant: 'solid', size: 'default' }}
        />
      )}

      {secondary.onClick && !secondary.to ? (
        <ShimmerButton type="button" onClick={secondary.onClick} {...shimmerProps}>
          <ItemBody item={secondary} />
        </ShimmerButton>
      ) : (
        <LinkedAction item={secondary} as={ShimmerButton} wrapperProps={shimmerProps} />
      )}
    </div>
  );
};
