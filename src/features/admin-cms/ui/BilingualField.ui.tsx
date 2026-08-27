import { Badge } from '@/shared/ui/badge';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { Textarea } from '@/shared/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { cn } from '@/shared/lib/utils';

export type BilingualFieldProps = {
  label: string;
  valueFr: string;
  valueEn: string;
  onChangeFr: (value: string) => void;
  onChangeEn: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  placeholderFr?: string;
  placeholderEn?: string;
  className?: string;
};

export function BilingualField({
  label,
  valueFr,
  valueEn,
  onChangeFr,
  onChangeEn,
  multiline = false,
  rows = 4,
  required = false,
  placeholderFr,
  placeholderEn,
  className,
}: BilingualFieldProps) {
  return (
    <div className={cn('space-y-2.5', className)}>
      <Label className="text-foreground">
        {label}
        {required ? <span className="ml-0.5 text-destructive">*</span> : null}
      </Label>
      <Tabs defaultValue="fr" className="gap-2.5">
        <TabsList className="h-9">
          <TabsTrigger value="fr" className="gap-1.5">
            <Badge variant="outline" className="px-1.5 py-0 text-[10px] tracking-wide">
              FR
            </Badge>
            Français
          </TabsTrigger>
          <TabsTrigger value="en" className="gap-1.5">
            <Badge variant="outline" className="px-1.5 py-0 text-[10px] tracking-wide">
              EN
            </Badge>
            English
          </TabsTrigger>
        </TabsList>
        <TabsContent value="fr">
          {multiline ? (
            <Textarea
              value={valueFr}
              onChange={(e) => onChangeFr(e.target.value)}
              placeholder={placeholderFr}
              required={required}
              rows={rows}
              aria-label={`${label} (FR)`}
            />
          ) : (
            <Input
              value={valueFr}
              onChange={(e) => onChangeFr(e.target.value)}
              placeholder={placeholderFr}
              required={required}
              aria-label={`${label} (FR)`}
            />
          )}
        </TabsContent>
        <TabsContent value="en">
          {multiline ? (
            <Textarea
              value={valueEn}
              onChange={(e) => onChangeEn(e.target.value)}
              placeholder={placeholderEn}
              required={required}
              rows={rows}
              aria-label={`${label} (EN)`}
            />
          ) : (
            <Input
              value={valueEn}
              onChange={(e) => onChangeEn(e.target.value)}
              placeholder={placeholderEn}
              required={required}
              aria-label={`${label} (EN)`}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
