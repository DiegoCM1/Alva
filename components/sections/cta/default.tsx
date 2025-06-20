"use client";

import { Section } from "../../ui/section";
import { Button } from "../../ui/button";
import Glow from "../../ui/glow";
import { ArrowRightIcon, Check } from "lucide-react";

export default function CtaWithWaitlist() {
  return (
    <Section id="cta" className="group relative overflow-hidden">
      <div className="max-w-container mx-auto flex flex-col gap-12 py-20 sm:gap-16">
        <div className="relative z-10 grid grid-cols-1 items-start gap-12 md:grid-cols-2 ">
          {/* Waitlist Column */}
          <div className=" ">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
              Únete a la Lista de Espera
            </h2>
            <p className="text-muted-foreground mb-1 max-w-md font-bold whitespace-pre-line">
              Asegura tu plaza y disfruta de beneficios exclusivos:{" "}
            </p>
            <ul>
              <li className="text-muted-foreground mb-2">
                <Check className="mr-2 inline h-4 w-4" /> Acceso gratuito de por vida.
              </li>
              <li className="text-muted-foreground mb-2">
                <Check className="mr-2 inline h-4 w-4" /> Actualizaciones anticipadas y nuevas características antes que
                nadie.
              </li>
              <li className="text-muted-foreground mb-2">
                <Check className="mr-2 inline h-4 w-4" /> Invitación al grupo VIP de feedback con el equipo de
                desarrollo.
              </li>
            </ul>
            <form
              action="https://formsubmit.co/luiscolin764@gmail.com"
              method="POST"
              className="flex max-w-xl flex-col items-center gap-4 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Ingresa tu correo electrónico"
                className="border-border bg-background text-foreground focus:border-ring focus:ring-ring/20 w-full rounded-md border px-4 py-2 text-sm shadow-sm focus:ring-2"
              />
              <Button type="submit" size="lg" variant="default">
                Unirme
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
          <div  className="">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">
              Contáctanos
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              ¿Quieres colaborar, invertir, dar feedback o ayudar de otra manera? Ponte en contacto con nosotros y únete a la misión.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="default"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=luiscolin764@gmail.com&su=¡Hola!&body=Me%20gustaría%20darte%20feedback%20sobre%20Alva."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Envíanos un correo
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
        <div className="border-brand/30 h-56 w-[480px] rounded-full border-[20px] opacity-30 blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}
