import { ContactInfo } from '../ui/ContactInfo';
import { ContactForm } from '../ui/ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-green py-16 md:py-24 px-6 md:px-12 lg:px-20 flex items-center"
    >
      <div className="relative max-w-6xl w-full mx-auto flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-10">
        {/* Partie Gauche : Textes & Infos de contact */}
        <ContactInfo />

        <div className="absolute bottom-90 md:bottom-10 left-50 md:left-65 w-70 md:w-115 h-70 md:h-115 rounded-full blur-[180px] md:blur-[270px] bg-cream pointer-events-none" />

        {/* Partie Droite : Boîte du formulaire blanc */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
