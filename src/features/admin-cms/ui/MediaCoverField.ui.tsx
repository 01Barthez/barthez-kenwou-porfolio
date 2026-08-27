import React from 'react';
import { ImagePlus, Link2, Trash2 } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import { Field } from './Field.ui';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';

type MediaCoverFieldProps = {
  label: string;
  value: string;
  onChange: (url: string) => void;
  className?: string;
};

/**
 * Cover media: prefer local file pick (data URL for now → API will return CDN URL later),
 * with optional raw URL fallback.
 */
export function MediaCoverField({ label, value, onChange, className }: MediaCoverFieldProps) {
  const { language } = useLanguageStore();
  const fr = language === 'fr';
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onFile = (file: File | null) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') onChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Field
      label={label}
      hint={
        fr
          ? 'Upload local maintenant · l’API produira l’URL CDN plus tard'
          : 'Local upload for now · API will return the CDN URL later'
      }
      className={className}
    >
      <Tabs defaultValue="upload" className="gap-2">
        <TabsList>
          <TabsTrigger value="upload">{fr ? 'Fichier' : 'File'}</TabsTrigger>
          <TabsTrigger value="url">URL</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-3">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFile(e.target.files?.[0] ?? null)}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className={cn(
              'flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border/80',
              'bg-muted/20 px-4 py-8 text-sm text-muted-foreground transition-colors hover:border-primary/35 hover:bg-muted/35',
            )}
          >
            <ImagePlus className="size-5 text-primary" />
            {fr ? 'Choisir une image' : 'Choose an image'}
          </button>
        </TabsContent>

        <TabsContent value="url">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Link2 className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={value.startsWith('data:') ? '' : value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="https://…"
                className="pl-8"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {value ? (
        <div className="relative mt-3 overflow-hidden rounded-lg border border-border/60">
          <img src={value} alt="" className="h-36 w-full object-cover" />
          <Button
            type="button"
            size="icon-sm"
            variant="secondary"
            className="absolute right-2 top-2"
            onClick={() => onChange('')}
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      ) : null}
    </Field>
  );
}
