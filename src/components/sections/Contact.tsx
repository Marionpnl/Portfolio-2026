import { ContactInfo } from '../ui/ContactInfo';
import { ContactForm } from '../ui/ContactForm';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#4E6256] py-16 md:py-24 px-6 md:px-12 lg:px-20 flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-10">
        {/* Partie Gauche : Textes & Infos de contact */}
        <ContactInfo />

        {/* Partie Droite : Boîte du formulaire blanc */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
