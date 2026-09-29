import Link from "next/link";
import { ArrowRight, AudioLines, Camera, Headphones, Watch } from "lucide-react";

import ProductCard from "@/components/common/ProductCard";
import type { ProductCardProps } from "@/components/common/ProductCard";

const products: ProductCardProps[] = [
  {
    name: "Studio Wireless Headphones",
    category: "Audio · Wireless",
    price: 129.99,
    rating: 4.9,
    reviews: 128,
    badge: "Just dropped",
    href: "/products/studio-wireless-headphones",
    icon: Headphones,
    accent: "text-[#e5fcff]",
    visual: "bg-gradient-to-br from-[#174a54] via-[#236d78] to-[#9bd7d5]",
  },
  {
    name: "Pulse Smart Watch",
    category: "Wearables · Fitness",
    price: 89.0,
    rating: 4.8,
    reviews: 96,
    badge: "New arrival",
    href: "/products/pulse-smart-watch",
    icon: Watch,
    accent: "text-[#eef4ff]",
    visual: "bg-gradient-to-br from-[#283958] via-[#536fa5] to-[#b8cafa]",
  },
  {
    name: "Pocket Creator Camera",
    category: "Photography · 4K",
    price: 249.99,
    rating: 4.9,
    reviews: 74,
    badge: "Bestseller",
    href: "/products/pocket-creator-camera",
    icon: Camera,
    accent: "text-[#fff3e7]",
    visual: "bg-gradient-to-br from-[#57402e] via-[#a47750] to-[#f0c89d]",
  },
  {
    name: "Mini Bluetooth Speaker",
    category: "Audio · Portable",
    price: 59.5,
    rating: 4.7,
    reviews: 112,
    badge: "Just dropped",
    href: "/products/mini-bluetooth-speaker",
    icon: AudioLines,
    accent: "text-[#f1eaff]",
    visual: "bg-gradient-to-br from-[#453160] via-[#7857a5] to-[#c6a8ed]",
  },
];

const Newarraival = () => {
  return (
    <section className="relative overflow-hidden bg-[#0c0e10] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-cyan-300/[0.06] blur-[110px]" />
      <div className="container relative">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#8bd9df]">
              <span className="size-1.5 rounded-full bg-[#7DD3DD]" /> Fresh finds
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">New <span className="bg-gradient-to-r from-[#7DD3DD] to-[#A7C8F7] bg-clip-text text-transparent">arrivals</span></h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/50 sm:text-base">Meet the latest gadgets, picked to make your everyday a little better.</p>
          </div>
          <Link href="/products" className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-medium text-white/80 transition hover:border-[#7DD3DD]/50 hover:bg-white/[0.04] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7DD3DD]">
            Browse all products <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.name} {...product} />)}
        </div>
      </div>
    </section>
  );
};

export default Newarraival;
