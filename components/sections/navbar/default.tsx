'use client'

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
// import { siteConfig } from "@/config/site";
import { Menu } from "lucide-react";
import { ModeToggle } from "../../ui/mode-toggle";

import { Button, type ButtonProps } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import LaunchUI from "../../logos/launch-ui";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
  showModeToggle?: boolean; // Agregar esta línea
}

export default function Navbar({
  logo = <LaunchUI />,
  name = "Alva",
  homeUrl = "/",
  showModeToggle = true, // Agregar esta línea
  mobileLinks = [
    { text: "Funciones", href: "#features" },
    { text: "Impacto", href: "#stats" },
    { text: "Preguntas", href: "#faq" },
    { text: "Contacto", href: "#cta" },
  ],

  showNavigation = true,
  className,
}: NavbarProps) {
  function scrollToSection(id: string) {
    const el = document.querySelector(id);
    if (el) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b",
        className,
      )}
    >
      <div className="mx-auto max-w-container px-4">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </a>
            {showNavigation && (
              <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                <button
                  onClick={() => scrollToSection("#features")}
                  className="hover:underline"
                >
                  Funciones
                </button>
                <button
                  onClick={() => scrollToSection("#stats")}
                  className="hover:underline"
                >
                  Impacto
                </button>
                <button
                  onClick={() => scrollToSection("#pricing")}
                  className="hover:underline"
                >
                  Precios
                </button>
                <button
                  onClick={() => scrollToSection("#faq")}
                  className="hover:underline"
                >
                  Preguntas
                </button>
                <button
                  onClick={() => scrollToSection("#cta")}
                  className="hover:underline"
                >
                  Contacto
                </button>
              </nav>
            )}
          </NavbarLeft>
          <NavbarRight>
            {/* Sign up and sign in buttons */}
            {/* {actions.map((action, index) =>
              action.isButton ? (
                <Button
                  key={index}
                  variant={action.variant || "default"}
                  asChild
                >
                  <a href={action.href}>
                    {action.icon}
                    {action.text}
                    {action.iconRight}
                  </a>
                </Button>
              ) : (
                <a
                  key={index}
                  href={action.href}
                  className="hidden text-sm md:block"
                >
                  {action.text}
                </a>
              ),
            )} */}
            {showModeToggle && <ModeToggle />} {/* Agregar esta línea */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href={homeUrl}
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>{name}</span>
                  </a>
                  {mobileLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-foreground text-left"
                    >
                      {link.text}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}