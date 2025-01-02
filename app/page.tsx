import Container from "@/components/Container";
import HomeDescripton from "@/components/HomeDescripton";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Statistics from "@/components/Statistics";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
          <div>
            <h3 className="font-semibold text-white/70 tracking-wider mb-1">
              Desenvolvedor Full-Stack
            </h3>
            <h2 className="text-3xl md:text-5xl mb-2">Olá Eu sou</h2>
            <h1 className="text-lightSky text-5xl md:text-6xl tracking-normal">
              Talismar Costa
            </h1>
          </div>
          <div className="w-full h-[170px] md:h-[140px] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <HomeDescripton />
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect flex items-center gap-4 py-2 px-4"
          >
            Baixar currículo <Download />
          </a>
          <SocialLinks />
          <Statistics />
        </div>
        <Photo />
      </Container>
    </div>
  );
}
