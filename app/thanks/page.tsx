// app/thanks/page.tsx — if using App Router
// OR pages/thanks.tsx — if using Pages Router

import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <Section className="group relative overflow-hidden text-center py-24 text-gray-900">
      <div className="max-w-container mx-auto relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold sm:text-5xl">
          🎉 You are officially on the waitlist!
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Thank you for joining Alva early. You’ve just taken the first step into something big — a smarter, more intentional way to start and end your day.
        </p>
        <p className="max-w-lg text-muted-foreground">
          We’ll notify you as soon as we’re ready to launch. In the meantime, feel free to share this with someone who could use a better routine.
        </p>

        <Button size="lg" asChild>
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>

      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
