import { ExternalLink, Folder, GitFork, Github, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Image } from '@/shared/ui/Image';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Link } from 'react-router-dom';
import { IProject } from '../model/project.types';

export const ProjectCard: React.FC<{ project: IProject }> = ({ project }) => {
  const { language } = useLanguageStore();
  const { t } = useTranslation();

  const {
    id,
    image,
    titleFr,
    titleEn,
    github,
    demo,
    category,
    descriptionFr,
    descriptionEn,
    stars,
    forks,
    tags,
  } = project;
  const index = parseInt(id, 10) - 1; // Assuming id is a stringified number

  return (
    <article
      key={id}
      className="project-card group overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={language === 'fr' ? titleFr : titleEn}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />

        {/* Overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm">
          <Link
            to={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm">{t('projects.code')}</span>
          </Link>

          <Link
            to={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:glow-primary transition-all"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="text-sm">{t('projects.demo')}</span>
          </Link>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Folder className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {language === 'fr' ? titleFr : titleEn}
            </h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {language === 'fr' ? descriptionFr : descriptionEn}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
