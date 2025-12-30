import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Image } from '@/shared/ui/Image';
import { Tags } from '@/shared/constants/tags.const';
import { Link } from 'react-router-dom';

export const ProfileCard: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="sticky top-24 glass rounded-2xl p-6 border border-border">
      <div className="relative mb-8">
        <Image
          src="images/barthez-kenwou.png"
          alt="Barthez Kenwou"
          className="w-full aspect-square object-cover rounded-xl"
        />
        <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-lg font-mono text-sm">
          AWS Expert
        </div>
      </div>

      {/* Presentation */}
      <h2 className="text-2xl font-bold text-foreground mb-2">Barthez Kenwou</h2>
      <p className="text-primary font-medium mb-4">Full Stack Developer & DevOps</p>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Cameroun</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Calendar className="h-4 w-4 text-primary" />
          <span>3+ {language === 'fr' ? "ans d'expérience" : 'years of experience'}</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Award className="h-4 w-4 text-primary" />
          <span>5+ certifications</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {Tags.slice(0, -1).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
          >
            {tag}
          </span>
        ))}
        <Link to={'/skills'}>
          <span
            key={Tags[Tags.length - 1]}
            className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
          >
            {Tags[Tags.length - 1]}
          </span>
        </Link>
      </div>
    </div>
  );
};
