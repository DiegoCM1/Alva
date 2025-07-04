import Github from "@/components/logos/github";

export const siteConfig = {
  name: "Alva – AI-Powered Morning & Night Companion",
  url: "https://launchuicomponents.com",
  getStartedUrl:
    "https://launchuicomponents.com/docs/getting-started/introduction",
  ogImage: "https://launchuicomponents.com/og.jpg",
  description:
    "Landing page components built with React, Shadcn/ui and Tailwind that will make your website feel premium.",
  links: {
    LinkedIn: "https://www.linkedin.com/in/mikolajdobrucki/",
    Instagram: "https://github.com/DiegoCM1/Alva",
    email: "mailto:contact@mikolajdobrucki.com",
    github: "https://github.com/DiegoCM1/Alva"
  },
  pricing: {
    pro: "https://launchui.lemonsqueezy.com/buy/b4798c68-c858-4c34-860b-069b5a0d6c4e",
    team: "https://launchui.lemonsqueezy.com/buy/130d8cfe-e123-464b-9f67-c74c5fedfb45",
  },
  stats: {
    figma: 2743,
    github: 665,
    cli: 5942,
    total: "9.3k+",
    updated: "6 May 2025",
    sections: 72,
    illustrations: 15,
    animations: 14,
    appTemplates: 2,
    websiteTemplates: 4,
  },
};

export type SiteConfig = typeof siteConfig;
