import { ReactNode } from "react";
import {
  RssIcon,
  FastForwardIcon,
  BrainCircuitIcon,
  AudioLinesIcon,
  RocketIcon,
  ScanFaceIcon,
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
        "Comienza tu día con claridad usando saludos personalizados, preguntas, rituales y mantras.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Reflexión Nocturna",
      description:
        "Relájate con reflexiones guiadas, seguimiento emocional y música para dormir.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Interacción por Voz",
      description:
        "Habla con Alva naturalmente: responde, reflexiona y conecta usando solo tu voz.",
      icon: <AudioLinesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Control Emocional y Aprendizaje",
      description:
        "Alva rastrea tu estado de ánimo y aprende de ti para personalizar la experiencia.",
      icon: <BrainCircuitIcon className="size-5 stroke-1" />,
    },
    {
      title: "Generador de Música Inteligente",
      description:
        "Crea playlists personalizadas según tu energía, rutina y hora del día.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
        {
      title: "Funciona sin Internet",
      description:
        "La experiencia básica de Alva está disponible sin conexión.",
      icon: <RssIcon className="size-5 stroke-1" />,
    }
  ],

  className,
}: ItemsProps) {
  return (
    <Section id="features" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:gap-8 lg:grid-cols-3">
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
