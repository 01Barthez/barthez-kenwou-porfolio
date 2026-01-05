import { useEffect, useState } from 'react';
import { useSidebar } from '@/shared/ui/sidebar';

/**
 * Hook personnalisé pour gérer la position dynamique de la navbar
 * en fonction de l'état du sidebar (expanded/collapsed)
 *
 * @returns {Object} - Contient le style CSS pour centrer la navbar
 *
 * @example
 * const navbarStyle = useNavbarPosition();
 * <nav style={navbarStyle}>...</nav>
 */
export const useNavbarPosition = () => {
  const { state, isMobile } = useSidebar();
  const [navbarStyle, setNavbarStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Sur mobile, la navbar est toujours centrée (pas de sidebar visible)
    if (isMobile) {
      setNavbarStyle({
        left: '50%',
        transform: 'translateX(-50%)',
      });
      return;
    }

    // Sur desktop, calculer la position en fonction de l'état du sidebar
    // Sidebar expanded: 16rem (256px)
    // Sidebar collapsed: 3rem (48px)
    const sidebarWidth = state === 'expanded' ? '16rem' : '3rem';

    setNavbarStyle({
      left: `calc(${sidebarWidth} + (100vw - ${sidebarWidth}) / 2)`,
      transform: 'translateX(-50%)',
    });
  }, [state, isMobile]);

  return navbarStyle;
};
