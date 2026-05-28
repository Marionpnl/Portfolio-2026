import { useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import type { ContactForm as ContactFormType } from '../../types/index';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Intégrer ici la logique d'envoi du formulaire
    console.log('Formulaire envoyé :', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-70 md:max-w-110 bg-cream p-10 md:p-13 rounded-3xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col gap-5 self-center lg:self-auto"
    >
      {/* Champ Nom */}
      <div className="flex flex-col gap-2 md:gap-3">
        <label
          htmlFor="name"
          className="font-dm font-medium text-sm md:text-base text-black"
        >
          {t('contact.name')}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t('contact.name_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 outline-none focus:border-green/50 transition-colors"
        />
      </div>

      {/* Champ E-mail */}
      <div className="flex flex-col gap-2 md:gap-3">
        <label
          htmlFor="email"
          className="font-dm font-medium text-sm md:text-base text-black"
        >
          {t('contact.email')}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t('contact.email_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 outline-none focus:border-green/50 transition-colors"
        />
      </div>

      {/* Champ Message */}
      <div className="flex flex-col gap-2 md:gap-3">
        <label
          htmlFor="message"
          className="font-dm font-medium text-sm md:text-base text-black"
        >
          {t('contact.message')}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder={t('contact.message_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-green/50 transition-colors resize-none"
        />
      </div>

      {/* Bouton Envoyer */}
      <button
        type="submit"
        className="w-fit self-center bg-green hover:bg-green/90 text-cream font-dm font-bold text-sm md:text-base px-8 py-1.5 md:px-10 md:py-2 rounded-full transition-transform duration-300 hover:scale-105 shadow-md cursor-pointer mt-2"
      >
        {t('contact.submit')}
      </button>
    </form>
  );
};
