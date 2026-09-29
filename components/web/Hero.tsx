import Link from "next/link";
import { ArrowRight, Headphones, Smartphone, Watch } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c0e10] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-32 top-8 size-[28rem] rounded-full bg-cyan-300/10 blur-[110px] sm:size-[38rem]" />
        <div className="absolute -left-40 bottom-0 size-80 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="container grid min-h-[calc(100svh-4rem)] items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:py-16">
        <div className="relative z-10 mx-auto w-full max-w-xl text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/75 sm:text-sm">
            <span className="size-1.5 rounded-full bg-[#7DD3DD] shadow-[0_0_12px_#7DD3DD]" />
            Your next favorite gadget is here
          </div>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Upgrade your
            <span className="mt-1 block bg-gradient-to-r from-[#7DD3DD] via-[#89CFF0] to-[#A7C8F7] bg-clip-text text-transparent">everyday tech.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:mt-6 sm:text-base lg:mx-0">
            Discover the gadgets that make life simpler, smarter, and a little more fun. Find your next essential at GadgetMaster.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link href="/products" className="gradient inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-[#101416] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7DD3DD]">
              Shop all gadgets <ArrowRight className="size-4" />
            </Link>
            <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-medium text-white/85 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Discover our story
            </Link>
          </div>
          <div className="mt-9 flex items-center justify-center gap-3 text-xs text-white/45 lg:justify-start">
            <div className="flex -space-x-2" aria-hidden="true">
              {['#7DD3DD', '#A7C8F7', '#D6A7F7'].map((color) => <span key={color} className="size-7 rounded-full border-2 border-[#0c0e10]" style={{ backgroundColor: color }} />)}
            </div>
            <span>Good tech. Better everyday.</span>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[310px] w-full max-w-[540px] items-center justify-center sm:min-h-[410px] lg:min-h-[500px]">
          <div className="absolute size-[72%] rounded-full border border-white/[0.07]" />
          <div className="absolute size-[54%] rounded-full border border-white/[0.07]" />
          <div className="absolute size-[38%] rounded-full bg-cyan-200/10 blur-3xl" />
          <div className="relative flex aspect-square w-[70%] max-w-[350px] items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.025] shadow-[0_30px_100px_rgba(0,0,0,.48)] backdrop-blur-xl sm:rounded-[2.5rem]">
            <div className="absolute inset-3 rounded-[1.5rem] border border-white/[0.06] sm:inset-4 sm:rounded-[2rem]" />
            <div className="relative flex size-[58%] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#b7f0f0] via-[#81c8dc] to-[#6394c3] shadow-[0_25px_65px_rgba(91,194,215,.28)] sm:rounded-[2.5rem]">
              <Smartphone className="size-[54%] -rotate-12 text-[#10212b] drop-shadow-[0_12px_12px_rgba(0,0,0,.22)]" strokeWidth={1.25} />
              <span className="absolute right-[8%] top-[8%] size-2 rounded-full bg-white/80 shadow-[0_0_14px_white]" />
            </div>
            <div className="absolute -left-[13%] top-[18%] grid size-14 place-items-center rounded-2xl border border-white/10 bg-[#171c20]/90 text-[#a8edf0] shadow-xl backdrop-blur sm:size-[4.5rem] sm:rounded-3xl">
              <Headphones className="size-7 sm:size-9" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-[7%] right-[7%] grid size-14 place-items-center rounded-2xl border border-white/10 bg-[#171c20]/90 text-[#b8cdfb] shadow-xl backdrop-blur sm:size-[4.5rem] sm:rounded-3xl">
              <Watch className="size-7 sm:size-9" strokeWidth={1.5} />
            </div>
          </div>
          <div className="absolute right-0 top-[13%] hidden rounded-2xl border border-white/10 bg-[#171c20]/80 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-[10px] uppercase tracking-[.18em] text-white/45">Curated tech</p>
            <p className="mt-1 text-sm font-medium">Made for your day</p>
          </div>
          <div className="absolute bottom-[10%] left-0 hidden rounded-2xl border border-white/10 bg-[#171c20]/80 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-sm font-medium">Find your next essential</p>
            <p className="mt-1 text-xs text-white/45">Explore the collection <ArrowRight className="ml-1 inline size-3" /></p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
