"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon, GraduationCapIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import Screenshot from "../../ui/screenshot";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "Start and end your day with intention",
  description = "Alva is your AI-powered morning and night assistant — helping you wake up with clarity, sleep with peace, and live more intentionally through guided conversations, music, and rituals.",
  mockup = (
    <div className="flex w-full items-center justify-center gap-4 text-center sm:flex-row sm:gap-8 lg:justify-evenly">
      <Screenshot
        srcLight="/app-light.png"
        srcDark="/app-dark.png"
        alt="Alva Morning Screenshot"
        width={1248}
        height={765}
        className="w-1/2 lg:w-1/3"
      />
      <Screenshot
        srcLight="/app-light-2.png"
        srcDark="/app-dark-2.png"
        alt="Alva Night Screenshot"
        width={1248}
        height={765}
        className="w-1/2 lg:w-1/3"
      />
    </div>
  ),
  badge = (
    <Badge variant="outline" className="animate-appear opacity-0">
      <span className="text-muted-foreground">Built with ❤️ by Verskod</span>
      <a href="cta" className="flex items-center gap-1">
        Join the waitlist
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons,
  className,
}: HeroProps) {
  const scrollToSection = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 80;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.scrollY - headerHeight - 32; // Added extra offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
  };

  const defaultButtons: HeroButtonProps[] = [
    {
      href: "cta",
      text: "Join the waitlist",
      variant: "default",
      onClick: (e) => {
        e.preventDefault();
        scrollToSection("#cta");
      },
    },
    {
      href: "#features",
      text: "Learn more",
      variant: "glow",
      icon: <GraduationCapIcon className="mr-2 size-4" />,
      onClick: (e) => {
        e.preventDefault();
        scrollToSection("#features");
      },
    },
  ];

  const finalButtons = buttons ?? defaultButtons;

  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pb-24 sm:pb-48 md:pb-64",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-gradient-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent opacity-0 drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {finalButtons !== false && finalButtons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {finalButtons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href} onClick={button.onClick}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-12">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
