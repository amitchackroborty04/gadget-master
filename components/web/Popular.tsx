import Link from "next/link";
import { ArrowRight, BatteryCharging, Gamepad2, Laptop, Smartphone } from "lucide-react";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardProps } from "@/components/common/ProductCard";

const popularProducts: ProductCardProps[] = [
  {
    name: "Nova Pro Smartphone",
    category: "Mobile · 5G",
    price: 699.0,
    rating: 4.9,
    reviews: 284,
    badge: "Fan favorite",
    href: "/products/nova-pro-smartphone",
    icon: Smartphone,
    accent: "text-[#e5fcff]",
    visual: "bg-gradient-to-br from-[#174a54] via-[#236d78] to-[#9bd7d5]",
  },
  {
    name: "SwiftBook Air Laptop",
    category: "Computing · Portable",
    price: 999.0,
    rating: 4.8,
    reviews: 196,
    badge: "Top rated",
    href: "/products/swiftbook-air-laptop",
    icon: Laptop,
    accent: "text-[#eef4ff]",
    visual: "bg-gradient-to-br from-[#283958] via-[#536fa5] to-[#b8cafa]",
  },
  {
    name: "Arcade Wireless Controller",
    category: "Gaming · Wireless",
    price: 74.99,
    rating: 4.8,
    reviews: 153,
    badge: "Best seller",
    href: "/products/arcade-wireless-controller",
    icon: Gamepad2,
    accent: "text-[#fff3e7]",
    visual: "bg-gradient-to-br from-[#57402e] via-[#a47750] to-[#f0c89d]",
  },
  {
    name: "PowerGo 20K Power Bank",
    category: "Accessories · Charging",
    price: 49.5,
    rating: 4.7,
    reviews: 221,
    badge: "Most loved",
    href: "/products/powergo-20k-power-bank",
    icon: BatteryCharging,
    accent: "text-[#f1eaff]",
    visual: "bg-gradient-to-br from-[#453160] via-[#7857a5] to-[#c6a8ed]",
  },
];

const Popular = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#0c0e10] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-12 size-96 rounded-full bg-blue-400/[0.06] blur-[110px]" />
      <div className="container relative">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#8bd9df]">
              <span className="size-1.5 rounded-full bg-[#7DD3DD]" /> Loved by gadget fans
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Popular <span className="bg-gradient-to-r from-[#7DD3DD] to-[#A7C8F7] bg-clip-text text-transparent">products</span></h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/50 sm:text-base">The gadgets customers keep coming back for, all in one place.</p>
          </div>
          <Link href="/products" className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white/80 transition hover:border-[#7DD3DD]/50 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7DD3DD]">
            Explore best sellers <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {popularProducts.map((product) => <ProductCard key={product.name} {...product} />)}
        </div>
      </div>
    </section>
  )
}

export default Popular
