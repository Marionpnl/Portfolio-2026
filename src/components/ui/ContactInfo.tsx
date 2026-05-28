import { useTranslation } from 'react-i18next';

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-cream max-w-xl text-left">
      {/* Tag & Titre */}
      <span className="font-dm font-bold text-ml md:text-2xl uppercase tracking-widest text-cream mb-10">
        {t('contact.label')}
      </span>

      <h2 className="font-space text-[32px] md:text-5xl font-bold tracking-tight leading-tight mb-12">
        {t('contact.title_prefix')}
        <span className="text-rose">{t('contact.title_highlight')}</span>
      </h2>

      {/* ZONE DES INFOS */}
      <div className="flex flex-col gap-6 font-dm items-start w-full">
        {/* E-MAIL */}
        <div className="flex items-center md:items-start gap-3 w-full md:border-b md:border-cream/10 md:pb-4">
          {/* Icône enveloppe - uniquement sur mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4.5 h-4.5 text-rose shrink-0 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <div className="flex flex-col text-left">
            {/* Titre - uniquement sur Desktop */}
            <p className="hidden md:block text-xs md:text-sm font-bold uppercase tracking-wider text-rose mb-1">
              {t('contact.label_email')}
            </p>
            <a
              href="mailto:marionpenel3@gmail.com"
              className="text-xs md:text-sm font-medium hover:underline hover:text-base transition-colors text-cream"
            >
              marionpenel3@gmail.com
            </a>
          </div>
        </div>

        {/* LOCALISATION */}
        <div className="flex items-center md:items-start gap-3 w-full md:border-b md:border-cream/10 md:pb-4">
          {/* Icône de géolocalisation - uniquement sur mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-rose shrink-0 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <div className="flex flex-col text-left">
            <p className="hidden md:block text-xs md:text-sm font-bold uppercase tracking-wider text-rose mb-1">
              {t('contact.label_location')}
            </p>
            <p className="text-xs md:text-sm font-medium text-cream">
              {t('contact.location')}
            </p>
          </div>
        </div>

        {/* DISPONIBILITÉ */}
        <div className="flex items-center md:items-start gap-3 w-full md:pb-4">
          {/* Icône de mallette - uniquement sur mobile */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-rose shrink-0 md:hidden"
          >
            <path
              d="M17.5 11.0459C15.1173 12.0101 12.5704 12.5039 10 12.5001C7.3475 12.5001 4.81667 11.9834 2.5 11.0459M13.3333 5.00008V3.33341C13.3333 2.89139 13.1577 2.46746 12.8452 2.1549C12.5326 1.84234 12.1087 1.66675 11.6667 1.66675H8.33333C7.89131 1.66675 7.46738 1.84234 7.15482 2.1549C6.84226 2.46746 6.66667 2.89139 6.66667 3.33341V5.00008M10 10.0001H10.0083M4.16667 16.6667H15.8333C16.2754 16.6667 16.6993 16.4912 17.0118 16.1786C17.3244 15.866 17.5 15.4421 17.5 15.0001V6.66675C17.5 6.22472 17.3244 5.8008 17.0118 5.48824C16.6993 5.17568 16.2754 5.00008 15.8333 5.00008H4.16667C3.72464 5.00008 3.30072 5.17568 2.98816 5.48824C2.67559 5.8008 2.5 6.22472 2.5 6.66675V15.0001C2.5 15.4421 2.67559 15.866 2.98816 16.1786C3.30072 16.4912 3.72464 16.6667 4.16667 16.6667Z"
              stroke="#D4A898"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="flex flex-col text-left">
            <p className="hidden md:block text-xs md:text-sm font-bold uppercase tracking-wider text-rose mb-1">
              {t('contact.label_availability')}
            </p>
            <p className="text-xs md:text-sm font-medium text-cream">
              {t('contact.availability')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
