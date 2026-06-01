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

  // States pour gérer l'état de soumission du formulaire et les retours d'UX
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'IDLE' | 'SUCCESS' | 'ERROR'
  >('IDLE');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('IDLE');

    // FormData pour envoyer les données au format multipart/form-data
    const dataToSend = new FormData();
    dataToSend.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    dataToSend.append('name', formData.name);
    dataToSend.append('email', formData.email);
    dataToSend.append('message', formData.message);
    dataToSend.append(
      'subject',
      `Nouveau message Portfolio de ${formData.name}`
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('SUCCESS');
        // Succès : On vide le state React pour nettoyer les champs à l'écran
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('ERROR');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
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
          disabled={isSubmitting}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={t('contact.name_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 outline-none focus:border-green/50 transition-colors disabled:opacity-50"
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
          disabled={isSubmitting}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder={t('contact.email_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 outline-none focus:border-green/50 transition-colors disabled:opacity-50"
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
          disabled={isSubmitting}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder={t('contact.message_placeholder')}
          className="w-full font-dm text-xs md:text-sm text-black bg-transparent border border-sage/50 rounded-xl px-3 md:px-4 py-2 md:py-3 outline-none focus:border-green/50 transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {/* Bouton Envoyer */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-fit self-center bg-green hover:bg-green/90 text-cream font-dm font-bold text-sm md:text-base px-8 py-1.5 md:px-10 md:py-2 rounded-full transition-transform duration-300 hover:scale-105 shadow-md cursor-pointer mt-2 disabled:opacity-50 disabled:hover:scale-100"
      >
        {isSubmitting ? t('contact.sending', 'Envoi...') : t('contact.submit')}
      </button>

      {/* Messages de state UX discrets */}
      {submitStatus === 'SUCCESS' && (
        <p className="text-green text-xs font-dm font-medium text-center mt-1">
          {t('contact.success_message')}
        </p>
      )}

      {submitStatus === 'ERROR' && (
        <p className="text-terra text-xs font-dm font-medium text-center mt-1">
          {t('contact.error_message')}
        </p>
      )}
    </form>
  );
};
