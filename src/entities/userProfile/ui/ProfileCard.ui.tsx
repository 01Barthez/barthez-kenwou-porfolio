import React from 'react';
import { MapPin, Calendar, Award, Cloud } from 'lucide-react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Image } from '@/shared/ui/Image';
import { Tags } from '@/shared/constants/tags.const';
import { Link } from 'react-router-dom';

export const ProfileCard: React.FC = () => {
  const { language } = useLanguageStore();

  return (
    <div className="sticky top-24 glass rounded-2xl p-0 border border-border">
      <div className="relative mb-2 max-h-64 overflow-hidden">
        <Image
          src="https://jebiwuygwtpmdnhhzsbw.supabase.co/storage/v1/object/public/Portfolio-Barthez/Profile/barthez-type-2.jpeg"
          alt="Barthez Kenwou"
          className="w-full object-cover object-top rounded-sm"
        />
        <div className="absolute cursor-default bottom-0 -right-3 group z-20">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

          {/* Premium Badge Glass Structure */}
          <div className="h-5 w-36 relative flex items-center gap-2 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 text-white px-2 py-0.5 rounded-xl font-mono text-xs font-bold border border-white/20 shadow-2xl transform group-hover:scale-102 group-hover:-translate-y-1 transition-all duration-300">
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        {/* Presentation */}
        <h2 className="text-lg font-bold text-foreground mb-0">Barthez Kenwou</h2>
        <p className="text-xs text-primary font-medium mb-2">Full Stack Developer & DevOps</p>

        <div className="space-y-1 text-sm">
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
        <div className="flex flex-wrap gap-1 mt-6">
          {Tags.slice(0, -1).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
          <Link to={'/skills'}>
            <span
              key={Tags[Tags.length - 1]}
              className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
            >
              {Tags[Tags.length - 1]}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
