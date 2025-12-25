import { useLanguageStore } from '../../state/useLanguageStore';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center h-10 px-3 rounded-xl bg-secondary/80 text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 font-mono text-sm font-semibold"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </button>
  );
};
