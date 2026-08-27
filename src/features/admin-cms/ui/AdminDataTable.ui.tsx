import { useMemo, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';
import { AdminEmptyState } from './AdminEmptyState.ui';

export type AdminDataTableColumn<T> = {
  key: string;
  header: string;
  className?: string;
  render?: (row: T) => ReactNode;
};

export type AdminDataTableFilter<T = unknown> = {
  key: string;
  label: string;
  options: Array<{ value: string; label: string }>;
  /** Custom matcher when default field equality is not enough. */
  match?: (row: T, selected: string) => boolean;
};

export type AdminDataTableProps<T> = {
  columns: AdminDataTableColumn<T>[];
  data: T[];
  getRowId: (row: T) => string;
  emptyTitle: string;
  emptyDescription?: string;
  onRowClick?: (row: T) => void;
  actions?: (row: T) => ReactNode;
  searchKeys?: string[];
  searchPlaceholder?: string;
  filters?: AdminDataTableFilter<T>[];
  /** Extra toolbar (right side) */
  toolbar?: ReactNode;
  className?: string;
  defaultPageSize?: 10 | 20 | 30 | 50;
};

function rowMatchesQuery<T>(row: T, query: string, searchKeys?: string[]) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return true;

  if (searchKeys && searchKeys.length > 0) {
    const record = row as Record<string, unknown>;
    return searchKeys.some((key) => {
      const value = record[key];
      if (value == null) return false;
      return String(value).toLowerCase().includes(normalized);
    });
  }

  try {
    return JSON.stringify(row).toLowerCase().includes(normalized);
  } catch {
    return false;
  }
}

function readCellValue<T>(row: T, key: string): ReactNode {
  const value = (row as Record<string, unknown>)[key];
  if (value == null) return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

export function AdminDataTable<T>({
  columns,
  data,
  getRowId,
  emptyTitle,
  emptyDescription,
  onRowClick,
  actions,
  searchKeys,
  searchPlaceholder,
  filters = [],
  toolbar,
  className,
  defaultPageSize = 10,
}: AdminDataTableProps<T>) {
  const language = useLanguageStore((s) => s.language);
  const isFr = language === 'fr';
  const [query, setQuery] = useState('');
  const [pageSize, setPageSize] = useState<number>(defaultPageSize);
  const [page, setPage] = useState(1);
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});

  const filtered = useMemo(() => {
    return data.filter((row) => {
      if (!rowMatchesQuery(row, query, searchKeys)) return false;
      for (const f of filters) {
        const selected = filterValues[f.key];
        if (!selected || selected === 'all') continue;
        if (f.match) {
          if (!f.match(row, selected)) return false;
          continue;
        }
        const val = (row as Record<string, unknown>)[f.key];
        if (String(val) !== selected) return false;
      }
      return true;
    });
  }, [data, query, searchKeys, filters, filterValues]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageRows = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={searchPlaceholder || (isFr ? 'Rechercher…' : 'Search…')}
            className="pl-8"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {filters.map((f) => (
            <Select
              key={f.key}
              value={filterValues[f.key] || 'all'}
              onValueChange={(v) => {
                setFilterValues((prev) => ({ ...prev, [f.key]: v }));
                setPage(1);
              }}
            >
              <SelectTrigger className="h-9 w-[9.5rem]">
                <SelectValue placeholder={f.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{f.label}</SelectItem>
                {f.options.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}

          <Select
            value={String(pageSize)}
            onValueChange={(v) => {
              setPageSize(Number(v));
              setPage(1);
            }}
          >
            <SelectTrigger className="h-9 w-[7.5rem]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 50].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n} / {isFr ? 'page' : 'page'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {toolbar}
        </div>
      </div>

      {filtered.length === 0 ? (
        <AdminEmptyState title={emptyTitle} description={emptyDescription ?? ''} />
      ) : (
        <>
          <div className="overflow-hidden rounded-xl border border-border/70 bg-card/40">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  {columns.map((col) => (
                    <TableHead key={col.key} className={col.className}>
                      {col.header}
                    </TableHead>
                  ))}
                  {actions ? (
                    <TableHead className="w-[1%] text-right">
                      {isFr ? 'Actions' : 'Actions'}
                    </TableHead>
                  ) : null}
                </TableRow>
              </TableHeader>
              <TableBody>
                {pageRows.map((row) => (
                  <TableRow
                    key={getRowId(row)}
                    className={cn(onRowClick && 'cursor-pointer')}
                    onClick={() => onRowClick?.(row)}
                  >
                    {columns.map((col) => (
                      <TableCell key={col.key} className={col.className}>
                        {col.render ? col.render(row) : readCellValue(row, col.key)}
                      </TableCell>
                    ))}
                    {actions ? (
                      <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-end gap-1">{actions(row)}</div>
                      </TableCell>
                    ) : null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              {filtered.length} {isFr ? 'élément(s)' : 'item(s)'}
              {' · '}
              {isFr ? 'Page' : 'Page'} {safePage}/{totalPages}
            </p>
            <div className="flex items-center gap-1">
              <Button
                type="button"
                size="icon-sm"
                variant="outline"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="size-3.5" />
              </Button>
              <Button
                type="button"
                size="icon-sm"
                variant="outline"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight className="size-3.5" />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
