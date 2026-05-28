import { useState, useEffect } from 'react';
import type { NavLink } from '../../types';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const navLinks: NavLink[] = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
];

const Navbar = () => {
  const { t } = useTranslation();

  // State pour gérer l'ouverture du menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // State pour stocker l'ID de la section actuellement active
  const [activeSection, setActiveSection] = useState('#hero');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Logique de détection de la section active au scroll
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Si la section occupe une bonne partie de l'écran (isIntersecting)
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    // Configuration de l'observer
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // On observe chaque section ciblée par nos liens de navigation
    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-green/15">
      <nav className="w-full mx-auto px-6 md:px-10 py-4 flex justify-between items-center relative z-50 bg-cream">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="font-space text-2xl md:text-5xl font-semibold text-black"
        >
          M<span className="text-terra">.</span>Penel
        </a>

        <div className="flex items-center gap-5 md:gap-10">
          {/* Liens Desktop */}
          <ul className="hidden md:flex gap-7 h-full items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href; // Vérification si actif
              return (
                <li key={link.href} className="relative py-1">
                  <a
                    href={link.href}
                    className={`text-xs uppercase tracking-widest text-black hover:text-terra font-medium transition-colors duration-200 block pb-1}
                    `}
                  >
                    {t(link.label)}
                  </a>
                  {/* La ligne de soulignement */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-terra transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0'}
                    `}
                  />
                </li>
              );
            })}
          </ul>

          {/* Bouton Hamburger Mobile */}
          <button
            className="block md:hidden p-2 text-black hover:text-terra transition-colors relative z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>

          {/* Switcher langue */}
          <LanguageSwitcher />
        </div>
      </nav>

      {/* MENU MOBILE DEROULANT */}
      <div
        className={`fixed inset-0 top-16.25 md:hidden bg-cream border-b border-green/15 transition-all duration-300 ease-in-out z-40 flex flex-col items-center justify-center ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href} className="flex flex-col items-center">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-dm text-sm uppercase tracking-widest font-medium transition-colors pb-1
                    ${isActive ? 'text-terra' : 'text-black hover:text-terra'}
                  `}
                >
                  {t(link.label)}
                </a>
                {/* Ligne sous le lien actif aussi sur mobile */}
                <span
                  className={`h-0.5 bg-terra transition-all duration-300 ${isActive ? 'w-10' : 'w-0'}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
