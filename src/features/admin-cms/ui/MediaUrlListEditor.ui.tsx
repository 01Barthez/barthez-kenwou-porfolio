import { ImageIcon, Plus, Trash2, Video } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { cn } from '@/shared/lib/utils';

export type MediaUrlListEditorProps = {
  label: string;
  urls: string[];
  onChange: (urls: string[]) => void;
  kind?: 'image' | 'video' | 'any';
  className?: string;
};

function looksLikeImage(url: string) {
  return /\.(avif|bmp|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(url.trim());
}

export function MediaUrlListEditor({
  label,
  urls,
  onChange,
  kind = 'any',
  className,
}: MediaUrlListEditorProps) {
  const language = useLanguageStore((s) => s.language);
  const isFr = language === 'fr';

  const updateAt = (index: number, next: string) => {
    onChange(urls.map((url, i) => (i === index ? next : url)));
  };

  const removeAt = (index: number) => {
    onChange(urls.filter((_, i) => i !== index));
  };

  const showImagePreview = (url: string) => {
    if (!url.trim()) return false;
    if (kind === 'video') return false;
    if (kind === 'image') return true;
    return looksLikeImage(url);
  };

  const KindIcon = kind === 'video' ? Video : ImageIcon;

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center justify-between gap-3">
        <Label className="text-foreground">{label}</Label>
        <Button type="button" variant="outline" size="sm" onClick={() => onChange([...urls, ''])}>
          <Plus className="size-3.5" aria-hidden />
          {isFr ? 'Ajouter une URL' : 'Add URL'}
        </Button>
      </div>

      {urls.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border/70 bg-card/30 px-4 py-6 text-center text-sm text-muted-foreground">
          {isFr ? 'Aucune URL.' : 'No URLs yet.'}
        </p>
      ) : (
        <ul className="space-y-2">
          {urls.map((url, index) => (
            <li
              key={index}
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-card/50 p-2 shadow-xs"
            >
              <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-muted/40">
                {showImagePreview(url) ? (
                  <img
                    src={url}
                    alt=""
                    className="size-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <KindIcon className="size-4 text-muted-foreground" aria-hidden />
                )}
              </div>
              <Input
                value={url}
                onChange={(e) => updateAt(index, e.target.value)}
                placeholder={
                  kind === 'video'
                    ? 'https://…/video.mp4'
                    : kind === 'image'
                      ? 'https://…/image.webp'
                      : 'https://…'
                }
                className="border-0 bg-transparent shadow-none focus-visible:ring-0"
                aria-label={`${label} ${index + 1}`}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => removeAt(index)}
                aria-label={isFr ? 'Supprimer' : 'Remove'}
                className="shrink-0 text-destructive hover:text-destructive"
              >
                <Trash2 className="size-3.5" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
