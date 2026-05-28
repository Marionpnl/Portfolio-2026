import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <footer className="w-full bg-cream py-8 px-6 md:px-12 lg:px-20 flex flex-col gap-6">
      {/* PREMIÈRE ZONE : Navigation & Réseaux Sociaux */}
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        {/* Blocs réseaux sociaux : Placé en haut sur mobile (order-1) et à droite sur desktop (md:order-2) */}
        <div className="flex items-center gap-4 order-1 md:order-2">
          {/* GitHub */}
          <a
            href="https://github.com/Marionpnl"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-sage/50 hover:bg-sage/80 flex items-center justify-center text-[#4E6256] transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 h-5"
            >
              <path
                d="M1.75 7.83391C1.975 7.86091 2.14167 7.96391 2.25 8.14291C2.413 8.41141 3.0185 9.40591 3.7065 9.40591H4.75M7.586 7.64941C7.86033 8.00875 7.9975 8.33141 7.9975 8.61741V10.4999M5.185 7.69541C4.895 8.01341 4.75017 8.31558 4.7505 8.60191V10.4999"
                stroke="#1C1C1A"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.586 7.64955C8.187 7.52455 8.7325 7.30855 9.156 6.99155C9.88 6.44955 10.25 5.61255 10.25 4.78605C10.25 4.20605 10.03 3.66455 9.648 3.20605C9.4355 2.95055 10.0575 1.27005 9.505 1.52655C8.9525 1.78355 8.1425 2.12555 7.718 2.00005C7.2635 1.86605 6.768 1.79205 6.25 1.79205C5.8 1.79205 5.367 1.84755 4.963 1.95055C4.376 2.09955 3.815 1.76905 3.25 1.52655C2.685 1.28455 2.9935 3.03055 2.8255 3.23755C2.4605 3.69005 2.25 4.22005 2.25 4.78605C2.25 5.61255 2.6975 6.44955 3.4215 6.99105C3.904 7.35205 4.5085 7.58255 5.185 7.69605"
                stroke="#1C1C1A"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/marion-penel-bb2a383a3"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-sage/50 hover:bg-sage/80 flex items-center justify-center text-[#4E6256] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.5 0.625C2.13533 0.625 1.78559 0.769866 1.52773 1.02773C1.26987 1.28559 1.125 1.63533 1.125 2C1.125 2.36467 1.26987 2.71441 1.52773 2.97227C1.78559 3.23013 2.13533 3.375 2.5 3.375C2.86467 3.375 3.21441 3.23013 3.47227 2.97227C3.73013 2.71441 3.875 2.36467 3.875 2C3.875 1.63533 3.73013 1.28559 3.47227 1.02773C3.21441 0.769866 2.86467 0.625 2.5 0.625ZM1.875 2C1.875 1.83424 1.94085 1.67527 2.05806 1.55806C2.17527 1.44085 2.33424 1.375 2.5 1.375C2.66576 1.375 2.82473 1.44085 2.94194 1.55806C3.05915 1.67527 3.125 1.83424 3.125 2C3.125 2.16576 3.05915 2.32473 2.94194 2.44194C2.82473 2.55915 2.66576 2.625 2.5 2.625C2.33424 2.625 2.17527 2.55915 2.05806 2.44194C1.94085 2.32473 1.875 2.16576 1.875 2ZM1.125 4C1.125 3.90054 1.16451 3.80516 1.23483 3.73483C1.30516 3.66451 1.40054 3.625 1.5 3.625H3.5C3.59946 3.625 3.69484 3.66451 3.76517 3.73483C3.83549 3.80516 3.875 3.90054 3.875 4V10.5C3.875 10.5995 3.83549 10.6948 3.76517 10.7652C3.69484 10.8355 3.59946 10.875 3.5 10.875H1.5C1.40054 10.875 1.30516 10.8355 1.23483 10.7652C1.16451 10.6948 1.125 10.5995 1.125 10.5V4ZM1.875 4.375V10.125H3.125V4.375H1.875ZM4.625 4C4.625 3.90054 4.66451 3.80516 4.73484 3.73483C4.80516 3.66451 4.90054 3.625 5 3.625H7C7.09946 3.625 7.19484 3.66451 7.26516 3.73483C7.33549 3.80516 7.375 3.90054 7.375 4V4.217L7.5925 4.1235C7.96753 3.9633 8.36536 3.86291 8.7715 3.826C10.159 3.7 11.375 4.79 11.375 6.19V10.5C11.375 10.5995 11.3355 10.6948 11.2652 10.7652C11.1948 10.8355 11.0995 10.875 11 10.875H9C8.90054 10.875 8.80516 10.8355 8.73483 10.7652C8.66451 10.6948 8.625 10.5995 8.625 10.5V7C8.625 6.83424 8.55915 6.67527 8.44194 6.55806C8.32473 6.44085 8.16576 6.375 8 6.375C7.83424 6.375 7.67527 6.44085 7.55806 6.55806C7.44085 6.67527 7.375 6.83424 7.375 7V10.5C7.375 10.5995 7.33549 10.6948 7.26516 10.7652C7.19484 10.8355 7.09946 10.875 7 10.875H5C4.90054 10.875 4.80516 10.8355 4.73484 10.7652C4.66451 10.6948 4.625 10.5995 4.625 10.5V4ZM5.375 4.375V10.125H6.625V7C6.625 6.63533 6.76987 6.28559 7.02773 6.02773C7.28559 5.76987 7.63533 5.625 8 5.625C8.36467 5.625 8.71441 5.76987 8.97227 6.02773C9.23013 6.28559 9.375 6.63533 9.375 7V10.125H10.625V6.19C10.625 5.238 9.7945 4.486 8.84 4.573C8.51207 4.60275 8.19084 4.68373 7.888 4.813L7.148 5.1305C7.09092 5.15502 7.02865 5.16497 6.96678 5.15947C6.9049 5.15396 6.84536 5.13317 6.79351 5.09897C6.74166 5.06476 6.69911 5.01821 6.6697 4.9635C6.64029 4.90878 6.62493 4.84762 6.625 4.7855V4.375H5.375Z"
                fill="#1C1C1A"
              />
            </svg>
          </a>
          {/* CV */}
          <a
            href="#cv"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-sage/50 hover:bg-sage/80 flex items-center justify-center text-black text-[10px] md:text-sm font-dm font-medium tracking-tighter transition-colors"
            aria-label="CV"
          >
            CV
          </a>
        </div>

        {/* Menu de navigation : sous les icônes sur mobile (order-2) et à gauche sur desktop (md:order-1) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 order-2 md:order-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm text-xs md:text-base font-regular text-black hover:text-terra transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* SECONDE ZONE : Ligne de séparation, Copyright & Top Arrow */}
      <div className="max-w-6xl w-full mx-auto pt-6 border-t border-black/10 flex items-center justify-center relative">
        {/* Mentions de copyright */}
        <p className="font-dm text-xs md:text-sm text-black text-center">
          <span className="block md:inline">
            © {currentYear} Marion Penel.{' '}
          </span>
          <span className="block md:inline">{t('footer.rights')}</span>
        </p>

        {/* Flèche de retour en haut */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-0 text-green hover:text-black transition-colors cursor-pointer"
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
              stroke="#4A7C6F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
