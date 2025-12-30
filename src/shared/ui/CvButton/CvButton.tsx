import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CvButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Button asChild className="w-full">
      <Link to="/cv">
        <FileDown className="mr-2 h-4 w-4" />
        <span className="">{t('nav.cv')}</span>
      </Link>
    </Button>
  );
};
