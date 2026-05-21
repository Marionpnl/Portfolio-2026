import type { NavLink } from '../../types';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { Menu } from 'lucide-react';

// Les liens de navigation — définis directement ici
const navLinks: NavLink[] = [
  { label: 'nav.about', href: '#about' },
  { label: 'nav.skills', href: '#skills' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.contact', href: '#contact' },
];

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-green/15">
      <nav className="w-full mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-[Space_Grotesk] text-2xl md:text-5xl font-semibold text-black"
        >
          M<span className="text-terra">.</span>Penel
        </a>

        <div className="flex items-center gap-5 md:gap-10">
          {/* Liens */}
          <ul className="hidden md:flex gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-black hover:text-terra transition-all duration-200"
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          {/* Bouton Hamburger Mobile — affiché sur mobile, caché sur ordinateur (md:hidden) */}
          <button
            className="block md:hidden p-2 text-black hover:text-terra transition-colors"
            onClick={() => console.log('Ouvrir le menu mobile')} // Logique d'état à ajouter au polissage final
            aria-label="Menu"
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
          {/* Switcher langue */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
