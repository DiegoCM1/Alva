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
    label: "Usuarios guiados",
    value: 7,
    suffix: "k",
    description: "personas han comenzado o terminado su día con Alva.",
  },
  {
    label: "Rituales diarios creados",
    value: 1.2,
    suffix: "k",
    description: "rutinas únicas de mañana y noche personalizadas por la IA.",
  },
  {
    label: "Mejora del sueño",
    value: "84%",
    description: "de usuarios reportan mejor calidad de sueño después de 1 semana.",
  },
  {
    label: "Registros emocionales",
    value: 19,
    suffix: "k",
    description: "registros de estado de ánimo y claridad mental con Alva.",
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
                  <div className="text-muted-foreground text-lg font-bold">
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
                  <div className="text-muted-foreground text-sm font-medium text-pretty">
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
