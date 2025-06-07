import { ReactNode } from "react";
import {
  RssIcon,
  EclipseIcon,
  FastForwardIcon,
  BrainCircuitIcon,
  AudioLinesIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";

import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "¿Qué hace de Alva tu compañero diario perfecto?",
  items = [
    {
      title: "Activación Matutina",
      description:
        "Comienza tu día con claridad usando saludos personalizados, preguntas y rituales.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Reflexión Nocturna",
      description:
        "Relájate con reflexiones guiadas, seguimiento del estado de ánimo y contenido relajante.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Interacción por Voz",
      description:
        "Habla con Alva naturalmente; pregunta, responde, reflexiona. Todo con tu voz.",
      icon: <AudioLinesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Control de Ánimo y Energía",
      description:
        "Alva hace seguimiento de tu estado emocional para mejorar sugerencias y apoyo.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
    {
      title: "Mantras e Intenciones",
      description:
        "Recibe mantras diarios y establece intenciones significativas para tu día.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Generador de Música Inteligente",
      description:
        "Alva crea listas de reproducción personalizadas según tu estado de ánimo, hora del día y rutina.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Funciona Sin Internet",
      description:
        "Las experiencias de mañana y noche funcionan incluso sin conexión a internet.",
      icon: <RssIcon className="size-5 stroke-1" />,
    },
    {
      title: "Aprendizaje Continuo",
      description:
        "Alva mejora con cada interacción, adaptándose cada vez más a ti.",
      icon: <BrainCircuitIcon className="size-5 stroke-1" />,
    },
  ],

  className,
}: ItemsProps) {
  return (
    <Section id="features" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
