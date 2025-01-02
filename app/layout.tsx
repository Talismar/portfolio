import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Talismar | Desenvolvedor",
  description:
    "Sou um Desenvolvedor Full-Stack com foco em criar soluções inovadoras e eficientes. Com uma abordagem estratégica e prática, resolvo problemas complexos e entrego resultados de alta qualidade, sempre buscando otimizar a experiência do usuário e a escalabilidade das aplicações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
