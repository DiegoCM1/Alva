// app/thanks/page.tsx — if using App Router
// OR pages/thanks.tsx — if using Pages Router

import { Section } from "@/components/ui/section";
import Glow from "@/components/ui/glow";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function ThanksPage() {
  return (
    <Section className="group relative overflow-hidden py-32 sm:py-40">
      <div className="max-w-container mx-auto relative z-10 flex flex-col items-center gap-8">
        <span className="animate-appear opacity-0 inline-flex items-center rounded-full border border-border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm">
          🎉 Welcome aboard!
        </span>

        <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-gradient-to-b bg-clip-text text-4xl font-semibold text-balance text-transparent drop-shadow-2xl opacity-0 delay-100 sm:text-5xl sm:leading-tight">
          You&apos;re officially on the waitlist!
        </h1>

        <p className="animate-appear text-muted-foreground relative z-10 max-w-[640px] text-balance text-center text-lg opacity-0 delay-200">
          Thank you for joining Alva early. You&apos;ve just taken the first step
          into something big — a smarter, more intentional way to start and end
          your day.
        </p>

        <p className="animate-appear text-muted-foreground relative z-10 max-w-[540px] text-balance text-center opacity-0 delay-300">
          We&apos;ll notify you as soon as we&apos;re ready to launch. In the
          meantime, feel free to share this with someone who could use a better
          routine.
        </p>

        <Button
          size="lg"
          asChild
          className="animate-appear opacity-0 delay-400"
          variant="default"
        >
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Homepage
          </Link>
        </Button>
      </div>

      {/* Background Effects */}
      <div
        className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-56 w-[480px] rounded-full border-[20px] border-brand/30 blur-3xl opacity-30" />
      </div>

      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
