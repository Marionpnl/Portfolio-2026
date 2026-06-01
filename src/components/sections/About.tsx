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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-25 items-center">
          {/* COLONNE GAUCHE — Photo */}
          <div className="flex justify-center pt-15">
            <div className="relative w-full max-w-110 flex flex-col justify-end items-center">
              {/* 1. Fond de la photo */}
              <div
                className={`absolute bottom-0 w-[90%] md:w-[110%] h-[110%] rounded-[40%] blur-[80px] z-0 transition-colors duration-500 bg-rose`}
              />

              {/* 2. Photo */}
              <div className="relative z-10 w-full overflow-hidden rounded-b-full">
                <img
                  src={aboutPhoto}
                  alt="Photo de Marion Penel — développeuse web fullstack"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* COLONNE DROITE — Texte */}
          <div className="flex flex-col gap-10">
            {/* Titre */}
            <h2 className="font-space text-center md:text-start text-[32px] md:text-[40px] font-bold text-[#1C1C1A] leading-tight ">
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
