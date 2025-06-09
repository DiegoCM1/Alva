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
  title = "Precios de Acceso Anticipado",
  description = "Alva está actualmente en desarrollo inicial. Sé uno de los primeros en apoyarla y dar forma al futuro de tus rituales diarios. Estos precios solo estarán disponibles durante la fase MVP.",
  plans = [
    {
      name: "Gratuito",
      description: "Prueba la versión inicial de Alva sin costo",
      price: 0,
      priceNote: "Funciones limitadas · Interacción por voz y rutinas disponibles",
      cta: {
        variant: "glow",
        label: "Unirse gratis",
        href: "/#contact",
      },
      features: [
        "Rituales de mañana y noche",
        "Interacción por voz (beta)",
        "Seguimiento del estado de ánimo",
        "Experiencia sin conexión",
      ],
      variant: "default",
    },
    {
      name: "Partidario Temprano",
      icon: <User className="size-4" />,
      description:
        "Apoya el desarrollo y obtén acceso de por vida a un precio reducido",
      price: 29,
      priceNote: "Pago único · Incluye todas las funciones futuras",
      cta: {
        variant: "default",
        label: "Asegurar acceso anticipado",
        href: siteConfig.pricing.pro || "/#contact",
      },
      features: [
        "Acceso completo a todas las funciones actuales y futuras",
        "Acceso prioritario a comentarios",
        "Actualizaciones gratuitas de por vida",
        "Nombre listado en créditos de contribuyentes (opcional)",
      ],
      variant: "default",
    },
    {
      name: "Plan de Equipo (Próximamente)",
      icon: <Users className="size-4" />,
      description:
        "Para coaches, familias o equipos pequeños que buscan crecer juntos",
      price: 40,
      priceNote: "Regístrate para recibir notificaciones cuando este plan se lance",
      cta: {
        variant: "default",
        label: "Notificarme",
        href: "/#contact",
      },
      features: [
        "Rutinas compartidas y perspectivas de retroalimentación",
        "Soporte para múltiples perfiles",
        "Perspectivas de bienestar del equipo (planificado)",
      ],
      variant: "default",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section id="pricing" className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 ">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">
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
