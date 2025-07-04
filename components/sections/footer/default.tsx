"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import AlvaLogoLight from "../../../public/alva-logo-light.png";
import AlvaLogoDark from "../../../public/favicon.png";
import { useTheme } from "next-themes";


import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <Logo />,
  name = "Alva",
  columns = [
    {
      title: "Producto",
      links: [
        { text: "Novedades", href: siteConfig.url },
        { text: "Documentación", href: siteConfig.url },
        { text: "Github", href: siteConfig.links.github },
      ],
    },
    {
      title: "Empresa",
      links: [
        { text: "Sobre Nosotros", href: siteConfig.url },
        { text: "Empleo", href: siteConfig.url },
        { text: "Blog", href: siteConfig.url },
      ],
    },
    {
      title: "Contacto",
      links: [
        { text: "LinkedIn", href: siteConfig.links.LinkedIn },
        { text: "Instagram", href: siteConfig.links.Instagram },
      ],
    },
  ],
  copyright = "© Verskod. Todos los derechos reservados",
  policies = [
    { text: "Política de Privacidad", href: siteConfig.url },
    { text: "Términos de Servicio", href: siteConfig.url },
  ],
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

function Logo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? AlvaLogoDark : AlvaLogoLight}
      alt="Alva Logo"
      width={40}
      height={40}
    />
  );
}
