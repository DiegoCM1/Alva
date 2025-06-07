import { ReactNode } from "react";

import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Preguntas Frecuentes",
  items = [
    {
      question: "¿Qué es Alva y cómo funciona?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Alva es un asistente impulsado por IA que te guía a través de tus rutinas
            de mañana y noche usando conversación natural, música, seguimiento del
            estado de ánimo y sugerencias personalizadas.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Te ayuda a comenzar el día con claridad y terminarlo con paz, todo
            a través de interacciones cortas e intencionales.
          </p>
        </>
      ),
    },
    {
      question: "¿Alva ya está disponible?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Alva está actualmente en desarrollo inicial. Puedes unirte al programa
          de acceso anticipado gratuito para probar la versión MVP y ayudar a dar
          forma al futuro de la aplicación con tus comentarios.
        </p>
      ),
    },
    {
      question: "¿Alva funciona sin internet?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Sí, Alva está siendo diseñada con funcionalidad sin conexión primero.
          Esto significa que tus rutinas básicas de mañana y noche seguirán
          funcionando incluso cuando no estés conectado.
        </p>
      ),
    },
    {
      question: "¿Tiene algún costo usar Alva?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Alva es gratuita para probar durante la fase MVP. Puedes apoyar el
          proyecto con una contribución única de partidario temprano que otorga
          acceso de por vida a todas las funciones y actualizaciones futuras.
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section id="faq" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
