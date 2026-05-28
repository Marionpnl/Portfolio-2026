import { useTranslation } from 'react-i18next';

export const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-white max-w-xl">
      <span className="font-dm font-bold text-xs md:text-sm uppercase tracking-widest text-white/70 mb-3">
        {t('contact.label', 'CONTACT')}
      </span>
      <h2 className="font-space text-3xl md:text-[44px] font-bold tracking-tight leading-tight mb-12">
        {t('contact.title_prefix', 'Travaillons ')}
        <span className="text-terra">
          {t('contact.title_highlight', 'ensemble')}
        </span>
      </h2>

      <div className="flex flex-col gap-6 font-dm">
        {/* E-MAIL */}
        <div className="border-b border-white/10 pb-4">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
            {t('contact.info.email_title', 'E-MAIL')}
          </p>
          <a
            href="mailto:marionpenel3@gmail.com"
            className="text-xs md:text-sm font-medium hover:text-terra transition-colors"
          >
            marionpenel3@gmail.com
          </a>
        </div>

        {/* LOCALISATION */}
        <div className="border-b border-white/10 pb-4">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
            {t('contact.info.location_title', 'LOCALISATION')}
          </p>
          <p className="text-xs md:text-sm font-medium">
            {t('contact.info.location_value', 'Yverdon-les-Bains, Suisse')}
          </p>
        </div>

        {/* DISPONIBILITÉ */}
        <div className="pb-4">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/50 mb-1">
            {t('contact.info.availability_title', 'DISPONIBILITÉ')}
          </p>
          <p className="text-xs md:text-sm font-medium text-white/90">
            {t('contact.info.availability_value', 'Ouverte aux opportunités')}
          </p>
        </div>
      </div>
    </div>
  );
};
