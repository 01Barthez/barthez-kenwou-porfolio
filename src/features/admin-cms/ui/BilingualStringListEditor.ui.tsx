import { Badge } from '@/shared/ui/badge';
import { Label } from '@/shared/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';
import { StringListEditor } from './StringListEditor.ui';

export type BilingualStringListEditorProps = {
  label: string;
  valuesFr: string[];
  valuesEn: string[];
  onChangeFr: (values: string[]) => void;
  onChangeEn: (values: string[]) => void;
  placeholderFr?: string;
  placeholderEn?: string;
  className?: string;
};

export function BilingualStringListEditor({
  label,
  valuesFr,
  valuesEn,
  onChangeFr,
  onChangeEn,
  placeholderFr,
  placeholderEn,
  className,
}: BilingualStringListEditorProps) {
  const language = useLanguageStore((s) => s.language);
  const isFr = language === 'fr';

  return (
    <div className={cn('space-y-2.5', className)}>
      <Label className="text-foreground">{label}</Label>
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
          <StringListEditor
            hideLabel
            values={valuesFr}
            onChange={onChangeFr}
            placeholder={placeholderFr ?? (isFr ? 'Élément…' : 'Item…')}
          />
        </TabsContent>
        <TabsContent value="en">
          <StringListEditor
            hideLabel
            values={valuesEn}
            onChange={onChangeEn}
            placeholder={placeholderEn ?? (isFr ? 'Élément…' : 'Item…')}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
