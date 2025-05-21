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
  title = "Questions and Answers",
  items = [
    {
      question: "What is Alva and how does it work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Alva is an AI-powered assistant that guides you through your morning
            and night routines using natural conversation, music, mood tracking,
            and personalized suggestions.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            It helps you start the day with clarity and end it with peace — all
            through short, intentional interactions.
          </p>
        </>
      ),
    },
    {
      question: "Is Alva already available?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Alva is currently in early development. You can join the free early
          access program to test the MVP version and help shape the future of
          the app with your feedback.
        </p>
      ),
    },
    {
      question: "Will Alva work without internet?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Yes — Alva is being designed with offline-first functionality. That
          means your core morning and night routines will still work even when
          you are not connected.
        </p>
      ),
    },
    {
      question: "Is there any cost to use Alva?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          Alva is free to try while in MVP. You can support the project with a
          one-time early supporter contribution that grants lifetime access to
          all future features and updates.
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
