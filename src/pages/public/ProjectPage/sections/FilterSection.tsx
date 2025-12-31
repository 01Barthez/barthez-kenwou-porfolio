import { filters } from '@/shared/constants/filter.const';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-primary text-primary-foreground glow-primary'
              : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
          }`}
        >
          {t(filter.labelKey)}
        </button>
      ))}
    </div>
  );
};
