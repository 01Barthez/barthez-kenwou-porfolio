import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/utils';

export type AdminPageHeaderProps = {
  title: string;
  /** @deprecated Prefer silent headers — kept optional for rare cases */
  description?: string;
  actions?: ReactNode;
  className?: string;
};

/**
 * Page title row only. Breadcrumbs live in AdminHeader — do not duplicate here.
 */
export function AdminPageHeader({ title, actions, className }: AdminPageHeaderProps) {
  return (
    <div
      className={cn(
        'mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
        {title}
      </h1>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
