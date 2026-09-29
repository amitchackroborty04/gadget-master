import Link from "next/link";
import { ArrowUpRight, Heart, Star, type LucideIcon } from "lucide-react";

export type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  href: string;
  icon: LucideIcon;
  accent: string;
  visual: string;
};

const ProductCard = ({
  name,
  category,
  price,
  rating,
  reviews,
  badge,
  href,
  icon: Icon,
  accent,
  visual,
}: ProductCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#141719] transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_20px_55px_rgba(0,0,0,.32)]">
      <Link href={href} className="block focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#7DD3DD]" aria-label={`View ${name}`}>
        <div className={`relative m-2.5 flex aspect-[1.2/1] items-center justify-center overflow-hidden rounded-[1.35rem] ${visual}`}>
          <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:18px_18px]" />
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] text-white/90 backdrop-blur sm:text-[11px]">{badge}</span>
          <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-white/15 bg-black/20 text-white/80 backdrop-blur transition group-hover:bg-white/15" aria-hidden="true"><Heart className="size-4" /></span>
          <div className="relative grid size-32 place-items-center rounded-[2rem] border border-white/25 bg-white/15 shadow-[0_22px_50px_rgba(0,0,0,.25)] backdrop-blur-md transition duration-500 group-hover:scale-105 sm:size-36">
            <Icon className={`size-[4.25rem] ${accent} drop-shadow-[0_10px_15px_rgba(0,0,0,.3)]`} strokeWidth={1.25} />
          </div>
          <span className="absolute bottom-3 right-3 grid size-9 translate-y-2 place-items-center rounded-full bg-white text-[#101416] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true"><ArrowUpRight className="size-4" /></span>
        </div>
        <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
          <p className="text-[10px] font-medium uppercase tracking-[.16em] text-white/40 sm:text-[11px]">{category}</p>
          <h3 className="mt-1.5 truncate text-base font-semibold tracking-tight text-white sm:text-lg">{name}</h3>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-white/50">
            <Star className="size-3.5 fill-[#7DD3DD] text-[#7DD3DD]" />
            <span className="font-medium text-white/80">{rating.toFixed(1)}</span>
            <span>({reviews} reviews)</span>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3.5">
            <p className="text-lg font-semibold text-white">${price.toFixed(2)}</p>
            <span className="text-xs font-medium text-[#91dce3] transition group-hover:text-white">View details <ArrowUpRight className="ml-0.5 inline size-3.5" /></span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
