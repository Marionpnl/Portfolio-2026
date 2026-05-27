import { useTranslation } from 'react-i18next';
import aboutPhoto from '../../assets/images/about_photo.png';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-15 px-6 md:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Label en haut à gauche */}
        <p className="text-black text-ml md:text-2xl uppercase tracking-widest font-bold mb-15">
          {t('about.label')}
        </p>

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* COLONNE GAUCHE — Photo */}
          <div className="flex justify-center ">
            <div className="w-[280px] h-[340px]">
              <img
                src={aboutPhoto}
                alt="Photo de Marion Penel — développeuse web fullstack"
                className="w-full h-full object-cover rounded-t-full rounded-b-[40%]"
              />
            </div>
          </div>

          {/* COLONNE DROITE — Texte */}
          <div className="flex flex-col gap-10">
            {/* Titre */}
            <h2 className="font-space text-center md:text-start text-[32px] md:text-[40px] font-bold text-[#1C1C1A] leading-tight">
              {t('about.title')}
            </h2>

            {/* Texte */}
            <div className="flex flex-col gap-4">
              <p className="text-[#1C1C1A] text-xs md:text-sm leading-relaxed">
                {t('about.text1_description')}
              </p>
              <p className="text-[#1C1C1A] text-xs md:text-sm leading-relaxed">
                {t('about.text2_description')}
              </p>
              <p className="text-[#1C1C1A] text-xs md:text-sm leading-relaxed">
                {t('about.text3_description')}
              </p>
              <p className="text-[#1C1C1A] text-xs md:text-sm leading-relaxed">
                {t('about.text4_description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
