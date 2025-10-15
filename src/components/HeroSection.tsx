import Image from "next/image";
import Button from "./Button";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section id="inicio" className="h-screen">
      <FadeInSection>
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <Image
            src="/profile.png"
            alt="Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
          <div className="text-center flex flex-col space-y-2 px-2">
            <h1 className="text-lg">
              Hola, mi nombre es <strong>Liuber Fornaris</strong>
            </h1>
            <p className="text-4xl font-black flex flex-col items-center">
              Desarrollador Web <span>Full-Stack</span>
            </p>
            <p>
              Desarrollador full-stack en Montevideo, Uruguay, especializado en
              Next.js, React, TypeScript y Node.js. Me apasiona crear
              aplicaciones web modernas, funcionales y atractivas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              onClick={() =>
                (window.location.href =
                  "mailto:liuberfornaris@gmail.com?subject=Hola%20Liuber&body=Te%20escribo%20desde%20tu%20portfolio")
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              }
            >
              Hablemos
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "/CV_Liuber_Fornaris_Desarrollador_Web.pdf",
                  "_blank",
                  "noopener"
                )
              }
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              }
            >
              Descargar CV
            </Button>
          </div>
        </div>

        {/*  */}
      </FadeInSection>
    </section>
  );
};

export default HeroSection;
