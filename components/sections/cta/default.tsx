"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Glow from "../../ui/glow";
import { ArrowRightIcon } from "lucide-react";

export default function CtaWithWaitlist() {
  return (
    <Section
      id="cta"
      className="group relative overflow-hidden"
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 sm:gap-16 py-20">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Waitlist Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              Join the Waitlist
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Get early access to Alva and stay updated on progress. Well notify you when we launch.
            </p>
            <form
              action="https://formsubmit.co/luiscolin764@gmail.com"
              method="POST"
              className="flex flex-col sm:flex-row items-center gap-4 max-w-xl"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground shadow-sm focus:border-ring focus:ring-2 focus:ring-ring/20"
              />
              <Button type="submit" size="lg" variant="default">
                Join Waitlist
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://alvaassistant.vercel.app/thanks"
              />
            </form>
          </div>

          {/* Get In Touch Column */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Want to collaborate, invest, or help in another way? Reach out and join the mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=luiscolin764@gmail.com&su=Hi%20there!&body=I'd%20love%20to%20give%20you%20feedback%20about%20Alva." 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send us an email
                </a>
              </Button>
            </div>
          </div>
        </div>
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
