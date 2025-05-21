import { siteConfig } from "@/config/site";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Button, type ButtonProps } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import Github from "../../logos/github";
import Screenshot from "../../ui/screenshot";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: ButtonProps["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
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
    <div className="flex items-center justify-center text-center gap-4 sm:flex-row sm:gap-8 w-full lg:justify-evenly">
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
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">Built with ❤️ by Verskod</span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Try Alva
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Try Alva",
      variant: "default",
    },
    {
      href: siteConfig.links.github,
      text: "View on GitHub",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
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
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                >
                  <a href={button.href}>
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
