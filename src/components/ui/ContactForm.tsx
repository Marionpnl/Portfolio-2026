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
      className="w-full max-w-[440px] bg-cream p-6 md:p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col gap-5 self-center lg:self-auto"
    >
      {/* Champ Nom */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-space font-bold text-xs md:text-sm text-black"
        >
          {t('contact.form.name_label', 'Nom')}
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t('contact.form.name_placeholder', 'Votre nom')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-green/50 transition-colors"
        />
      </div>

      {/* Champ E-mail */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-space font-bold text-xs md:text-sm text-black"
        >
          {t('contact.form.email_label', 'E-mail')}
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t('contact.form.email_placeholder', 'Votre e-mail')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-green/50 transition-colors"
        />
      </div>

      {/* Champ Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-space font-bold text-xs md:text-sm text-black"
        >
          {t('contact.form.message_label', 'Message')}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder={t(
            'contact.form.message_placeholder',
            'Parlez-moi de votre projet...'
          )}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-black/10 rounded-xl px-4 py-3 outline-none focus:border-green/50 transition-colors resize-none"
        />
      </div>

      {/* Bouton Envoyer */}
      <button
        type="submit"
        className="w-fit self-center bg-green hover:bg-green/90 text-white font-dm font-medium text-xs md:text-sm px-8 py-2.5 rounded-full transition-transform duration-300 hover:scale-105 shadow-md cursor-pointer mt-2"
      >
        {t('contact.form.submit', 'Envoyer')}
      </button>
    </form>
  );
};
