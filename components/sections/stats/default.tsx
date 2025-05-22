import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
items = [
  {
    label: "users guided",
    value: 1.2,
    suffix: "k",
    description: "people have started or ended their day with Alva",
  },
  {
    label: "daily rituals created",
    value: 7,
    suffix: "k",
    description: "unique morning and night routines personalized by the AI",
  },
  {
    label: "sleep improvement",
    value: "84%",
    description: "of users report better sleep quality after 1 week",
  },
  {
    label: "emotional check-ins",
    value: 19,
    suffix: "k",
    description: "mood and mental clarity check-ins logged with Alva",
  },
],
  className,
}: StatsProps) {
  return (
    <Section id="stats" className={className}>
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 text-left"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text  font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 text-4xl sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-semibold text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
