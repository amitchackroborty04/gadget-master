import { Headphones, RotateCcw, ShieldCheck, Truck, Zap } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Quality you can trust",
    description: "Every gadget is carefully selected for reliable performance and everyday value.",
    color: "text-[#8ce0e5]",
    glow: "bg-[#7DD3DD]/10",
  },
  {
    icon: Truck,
    number: "02",
    title: "Fast, careful delivery",
    description: "Get your new tech delivered quickly, packed with care from checkout to doorstep.",
    color: "text-[#a9cafa]",
    glow: "bg-[#89CFF0]/10",
  },
  {
    icon: RotateCcw,
    number: "03",
    title: "Easy returns",
    description: "Changed your mind? Our straightforward return process helps you shop with confidence.",
    color: "text-[#c7a8f2]",
    glow: "bg-[#b895ef]/10",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Real human support",
    description: "Have a question? Our friendly team is ready to help you find the right fit.",
    color: "text-[#f0c89d]",
    glow: "bg-[#f0c89d]/10",
  },
];

export const WhayChose = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#101315] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-44 top-1/4 size-[30rem] rounded-full bg-cyan-300/[0.06] blur-[120px]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#8bd9df]">
              <Zap className="size-3.5" /> The GadgetMaster difference
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Tech shopping, <span className="bg-gradient-to-r from-[#7DD3DD] to-[#A7C8F7] bg-clip-text text-transparent">made better.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/55 sm:text-base">
              The right gadget should make life easier from the moment you choose it. We make every step feel simple, dependable, and personal.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-white/70">
              <span className="grid size-10 place-items-center rounded-full border border-[#7DD3DD]/20 bg-[#7DD3DD]/[0.08] text-[#8ce0e5]"><ShieldCheck className="size-5" /></span>
              <span>Thoughtful picks. Support that cares.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {benefits.map(({ icon: Icon, number, title, description, color, glow }) => (
              <article key={number} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.045] sm:rounded-3xl sm:p-6">
                <div aria-hidden="true" className={`absolute -right-8 -top-8 size-28 rounded-full ${glow} opacity-70 blur-2xl transition group-hover:opacity-100`} />
                <div className="relative flex items-start justify-between">
                  <span className={`grid size-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] ${color}`}><Icon className="size-5" strokeWidth={1.7} /></span>
                  <span className="text-xs font-medium tracking-[.16em] text-white/25">{number}</span>
                </div>
                <h3 className="relative mt-5 text-base font-semibold tracking-tight text-white sm:text-lg">{title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-white/50">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
