import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { BackToTopProps } from '../../types';

export const BackToTop = ({ isMenuOpen }: BackToTopProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDarkBg, setIsOverDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Gestion de la visibilité globale (on affiche après 400px de scroll)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Détection de la section contact (Fond Vert Foncé)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const buttonY = window.innerHeight - 80; // Position approximative du bouton à l'écran

        // Si le haut de la section contact est passé au-dessus du bouton (ou proche du bas de l'écran)
        // et que le bas de la section n'est pas encore totalement remonté.
        if (rect.top <= buttonY && rect.bottom >= buttonY) {
          setIsOverDarkBg(true);
        } else {
          setIsOverDarkBg(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Si le menu mobile est ouvert, on cache la flèche
  if (!isVisible || isMenuOpen) return null;

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleBackToTop}
      className={`fixed bottom-6 right-3 md:right-10 z-50 
        w-8 h-8 md:w-10 md:h-10 rounded-full bg-transparent flex items-center justify-center 
        transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in
        ${
          isOverDarkBg
            ? 'text-cream hover:bg-white/10 hover:text-white' // Style sur la section Contact (Fond Sombre)
            : 'text-green hover:bg-black/20 hover:text-black' // Style sur le reste du site (Fond Clair)
        }
      `}
      aria-label={t('footer.back_to_top')}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-8 h-8"
      >
        <path
          d="M5 12L12 5L19 12M12 5V19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};
