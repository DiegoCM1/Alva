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
  title = "What makes Alva your perfect daily companion?",
  items = [
    {
      title: "Morning Activation",
      description:
        "Start your day with clarity using personalized greetings, questions, and rituals.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Night Reflection",
      description:
        "Wind down with guided reflections, mood tracking, and relaxing content.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Voice Interaction",
      description:
        "Talk to Alva naturally — ask, answer, reflect. All with your voice.",
      icon: <AudioLinesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Mood & Energy Check",
      description:
        "Alva tracks your emotional state to improve suggestions and support.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
    {
      title: "Mantras & Intentions",
      description:
        "Receive daily mantras and set meaningful intentions for your day.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Smart Music Generator",
      description:
        "Alva creates custom playlists based on your mood, time of day, and routine.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Offline Friendly",
      description:
        "Morning & night experiences work even without an internet connection.",
      icon: <RssIcon className="size-5 stroke-1" />,
    },
    {
      title: "Always Learning",
      description:
        "Alva improves with each interaction, becoming more aligned with you.",
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
