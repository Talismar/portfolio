"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experiência", value: "experience", icon: Briefcase },
  { title: "Educação", value: "education", icon: GraduationCap },
  { title: "Habilidades", value: "skills", icon: Code2 },
  { title: "Sobre mim", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Experiência profissional",
    items: [
      {
        role: "Desenvolvedor Full-Stack (Freelancer)",
        company: "Projetos Independentes",
        period: "2023 - Presente",
        description:
          "Desenvolvi dois projetos frontend usando Next.js, focando em interfaces modernas e de alto desempenho.",
        highlights: ["Next.js", "TypeScript", "UI Responsiva", "Tailwindcss"],
      },
      {
        role: "Desenvolvedor Full-Stack",
        company: "NADIC - IFRN",
        period: "2022 - Presente",
        description:
          "Atuo no desenvolvimento de soluções inovadoras, integrando frontend com frameworks modernos e backend com Django Rest Framework.",
        highlights: [
          "TypeScript",
          "Next.js",
          "Styled Components",
          "Django Rest Framework",
          "Pesquisa e Inovação",
        ],
      },
    ],
  },
  education: {
    title: "Formação Educacional",
    items: [
      {
        degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
        institution: "IFRN - Campus Pau dos Ferros",
        period: "2021 - 2025",
        description:
          "Cursando o curso superior em Análise e Desenvolvimento de Sistemas, com foco em programação, desenvolvimento web, banco de dados e sistemas de informação.",
        achievements: [
          "Aprovado em projetos práticos",
          "Desenvolvedor Full-Stack no NADIC - IFRN",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades Técnicas",
    categories: [
      {
        name: "Desenvolvedor Frontend",
        description:
          "Como desenvolvedor Frontend, crio interfaces de usuário dinâmicas e responsivas, utilizando as tecnologias mais modernas. Com React e Next.js, desenvolvo aplicações interativas e escaláveis, garantindo uma experiência de usuário intuitiva e de alto desempenho. Utilizo Tailwind CSS e Styled Components para estilizar de maneira eficiente e flexível, sempre focado em manter um design clean e acessível.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Styled Components",
        ],
      },
      {
        name: "Desenvolvedor Backend",
        description:
          "No Backend Development, sou responsável por criar APIs robustas e escaláveis, otimizando o desempenho e garantindo a segurança dos dados. Utilizo Django Rest Framework para construir soluções eficientes e rápidas, enquanto Python e PostgreSQL são as tecnologias principais para lidar com a lógica de negócios e o armazenamento de dados. Tenho experiência também em Node.js e Express, buscando sempre a melhor arquitetura para atender às necessidades do projeto.",
        skills: [
          "Node.js",
          "Express",
          "Python",
          "Django Rest Framework",
          "PostgreSQL",
          "UML",
        ],
      },
      {
        name: "Ferramentas",
        description:
          "Tenho experiência em diversas ferramentas que ajudam a otimizar o desenvolvimento e a entrega contínua de software. Utilizo Git para controle de versão, Docker para containerização e AWS para escalabilidade e infraestrutura. Também aplico práticas de CI/CD para automação de pipelines e sou familiarizado com metodologias ágeis, garantindo entregas mais rápidas e de qualidade.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Metodologias Ágeis"],
      },
    ],
  },
  about: {
    title: "Sobre mim",
    bio: "Sou um Desenvolvedor Full-Stack dedicado a criar soluções inovadoras e eficazes. Tenho paixão por resolver desafios complexos, sempre buscando otimizar processos e entregar produtos que atendam às necessidades dos usuários. Com uma abordagem focada na qualidade e escalabilidade, me esforço para estar em constante aprendizado e evolução no meu trabalho.",
    interests: [
      "Contribuir: Open Source",
      "Criar Conteúdo Tecnológico",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["Português (Nativo)", "Inglês (Intermediário)"],
  },
};

export default function ResumePage() {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[60%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interesses</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  );
}
