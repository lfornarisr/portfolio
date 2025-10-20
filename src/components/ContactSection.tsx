import Image from "next/image";
import Button from "./Button";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section id="contacto" className="h-screen">
      <FadeInSection>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <h2 className="text-4xl">Contacto</h2>
        </div>
      </FadeInSection>
    </section>
  );
};

export default HeroSection;
