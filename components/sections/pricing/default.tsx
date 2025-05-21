import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { User, Users } from "lucide-react";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Early Access Pricing",
  description = "Alva is currently in early development. Be one of the first to support it and shape the future of your daily rituals. These prices will only be available during the MVP phase.",
  plans = [
    {
      name: "Free",
      description: "Try out the early version of Alva at no cost",
      price: 0,
      priceNote: "Limited features · Voice interaction & routines available",
      cta: {
        variant: "glow",
        label: "Join for free",
        href: "/#contact", // or early access waitlist link
      },
      features: [
        "Morning & night rituals",
        "Voice interaction (beta)",
        "Mood tracking",
        "Offline-ready experience",
      ],
      variant: "default",
    },
    {
      name: "Early Supporter",
      icon: <User className="size-4" />,
      description:
        "Support development and get lifetime access at a reduced price",
      price: 29,
      priceNote: "One-time payment · Includes all future features",
      cta: {
        variant: "default",
        label: "Secure early access",
        href: siteConfig.pricing.pro || "/#contact",
      },
      features: [
        "Full access to all current & upcoming features",
        "Priority feedback access",
        "Free updates for life",
        "Name listed in contributor credits (optional)",
      ],
      variant: "glow-brand",
    },
    {
      name: "Team Plan (Coming Soon)",
      icon: <Users className="size-4" />,
      description:
        "For coaches, families or small teams looking to grow together",
      price: 40,
      priceNote: "Sign up to be notified when this plan launches",
      cta: {
        variant: "default",
        label: "Notify me",
        href: "/#contact", // or a waitlist form
      },
      features: [
        "Shared routines and feedback insights",
        "Multiple profiles support",
        "Team wellness insights (planned)",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
