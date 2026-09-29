"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#090b0c] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 size-[28rem] rounded-full bg-cyan-300/[0.06] blur-[120px]" />
      <div className="container relative">
        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-20">
          <div className="max-w-xl">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white" aria-label="GadgetMaster home">
              Gadget<span className="bg-gradient-to-r from-[#7DD3DD] to-[#A7C8F7] bg-clip-text text-transparent">Master</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              Better everyday tech starts here. Discover useful gadgets, thoughtful picks, and your next favorite upgrade.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
                { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
                { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
              ].map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} aria-label={label} className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition hover:border-[#7DD3DD]/40 hover:bg-[#7DD3DD]/10 hover:text-[#9ce7eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7DD3DD]">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.09] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-5 sm:p-7">
            <div className="flex size-10 items-center justify-center rounded-xl border border-[#7DD3DD]/20 bg-[#7DD3DD]/[0.08] text-[#9ce7eb]"><FaEnvelope className="size-5" /></div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">A little more great tech in your inbox.</h2>
            <p className="mt-2 text-sm leading-6 text-white/50">Get new arrivals, useful picks, and occasional offers. No clutter.</p>
            <form onSubmit={handleSubscribe} className="mt-5 flex flex-col gap-2 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email address"
                className="h-12 min-w-0 flex-1 rounded-full border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#7DD3DD]/60 focus:ring-2 focus:ring-[#7DD3DD]/15"
                disabled={submitted}
              />
              <button type="submit" disabled={submitted} className="gradient inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-[#101416] transition hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-70">
                {submitted ? "Thanks!" : <>Subscribe <FaArrowRight className="size-4" /></>}
              </button>
            </form>
            <p aria-live="polite" className="mt-3 min-h-5 text-xs text-white/40">
              {submitted ? "Thanks for your interest! Newsletter sign-up will be available soon." : "By subscribing, you agree to receive occasional GadgetMaster updates."}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GadgetMaster. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/products" className="transition hover:text-white/80">Shop</Link>
            <Link href="/about" className="transition hover:text-white/80">About</Link>
            <Link href="/contact" className="transition hover:text-white/80">Contact</Link>
            <Link href="/privacy" className="transition hover:text-white/80">Privacy</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
