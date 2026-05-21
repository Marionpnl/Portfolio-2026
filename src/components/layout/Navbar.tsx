import type { NavLink } from '../../types';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';

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
      <nav className="max-w-6xl px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="font-[Space_Grotesk] text-5xl font-semibold text-black"
        >
          M<span className="text-terra">.</span>Penel
        </a>
        <div className="flex items-center gap-10">
          {/* Liens */}
          <ul className="flex gap-7">
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

          {/* Switcher langue */}
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
