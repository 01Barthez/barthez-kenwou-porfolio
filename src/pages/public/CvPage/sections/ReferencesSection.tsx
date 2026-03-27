import React from 'react';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { UsersRound, Phone, Mail, Building2 } from 'lucide-react';

interface Reference {
  name: string;
  roleFr: string;
  roleEn: string;
  company: string;
  email: string;
  phone: string;
}

interface ReferencesSectionProps {
  references: Reference[];
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({ references }) => {
  const { language } = useLanguageStore();

  if (!references || references.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <UsersRound className="h-5 w-5 text-blue-500" />
        </div>
        {language === 'fr' ? 'Références Professionnelles' : 'Professional References'}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {references.map((ref, i) => (
          <div key={i} className="p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all">
            <h3 className="font-bold text-lg text-foreground">{ref.name}</h3>
            <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-3">
              <Building2 className="h-4 w-4" />
              <span>{language === 'fr' ? ref.roleFr : ref.roleEn} — {ref.company}</span>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${ref.email}`} className="hover:text-primary transition-colors">{ref.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{ref.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
