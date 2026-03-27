import React, { useState } from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { IProject } from '@/entities/projets/model/project.types';
import { ChevronLeft, ChevronRight, Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';
import { Image } from '@/shared/ui/Image';
import { cn } from '@/shared/lib/utils';
import { ProjectStatusBadge } from '@/entities/projets/ui/ProjectStatusBadge.ui';

interface Props {
  project: IProject;
}

export const HeroDetailSection: React.FC<Props> = ({ project }) => {
  const { language } = useLanguageStore();
  const title = language === 'fr' ? project.titleFr : project.titleEn;
  const description = language === 'fr' ? project.descriptionFr : project.descriptionEn;
  
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx(prev => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIdx(p => (p === 0 ? project.images.length - 1 : p - 1));

  const renderMedia = (media: string, isActive: boolean) => {
    if (!media) return null;
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.ogg');
    const classes = "w-full h-[50vh] md:h-[70vh] object-cover transition-transform duration-700 hover:scale-105";
    if (isVideo) {
      return <video src={media} autoPlay={isActive} loop muted playsInline className={classes} />;
    }
    return <Image src={media} alt={title} className={classes} />;
  };

  return (
    <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl group border border-border/50">
      {/* Media background */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-muted overflow-hidden">
         {/* Back Overlay */}
         <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30">
           <Link
             to="/projects"
             className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-black/60 transition-all text-sm shadow-lg hover:shadow-primary/20"
           >
             <ArrowLeft className="h-4 w-4" />
             {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
           </Link>
         </div>

         {project.images.length > 1 ? (
           <>
             <div 
               className="flex w-full h-full transition-transform duration-700 ease-in-out"
               style={{ transform: `translateX(-${currentIdx * 100}%)` }}
             >
               {project.images.map((img, i) => (
                 <div key={i} className="w-full h-full flex-shrink-0 relative">
                   {renderMedia(img, currentIdx === i)}
                 </div>
               ))}
             </div>
             
             {/* Arrows */}
             <div className="absolute top-1/3 -translate-y-1/2 left-2 md:left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
               <button onClick={prev} className="p-2 md:p-3 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
               </button>
             </div>
             <div className="absolute top-1/3 -translate-y-1/2 right-2 md:right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
               <button onClick={next} className="p-2 md:p-3 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all cursor-pointer">
                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
               </button>
             </div>
             
             {/* Dots */}
             <div className="absolute bottom-8 inset-x-0 flex justify-center gap-2 z-20">
               {project.images.map((_, i) => (
                 <button 
                   key={i} 
                   onClick={() => setCurrentIdx(i)}
                   className={cn("h-2 rounded-full transition-all shadow-md cursor-pointer", currentIdx === i ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/90")}
                 />
               ))}
             </div>
           </>
         ) : (
           renderMedia(project.images[0] || "", true)
         )}

         {/* Gradient Overlay for Text */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-30 pointer-events-none flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="pointer-events-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary font-bold text-xs uppercase tracking-wider border border-primary/20">
              {project.category}
            </span>
            {project.status && <ProjectStatusBadge status={project.status} />}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/80 line-clamp-2 md:line-clamp-none">
            {description}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 pointer-events-auto shrink-0">
          {project.github && project.github !== '#' && (
            <Button size="default" variant="outline" className="rounded-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link to={project.github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                Code Source
              </Link>
            </Button>
          )}
          {project.demo && project.demo !== '#' && (
            <Button size="default" className="rounded-lg shadow-lg shadow-primary/20" asChild>
              <Link to={project.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
