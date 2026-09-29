"use client";

import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#12121233] backdrop-blur supports-backdrop-filter:[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 container items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-[#A5ABB1] tracking-tight"
          aria-label="Gadget Master home"
        >
          Gadget<span className="text-primary/65">Master</span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-base font-medium text-[#A5ABB1] transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            className="text-[#A5ABB1]"
            variant="ghost"
            size="icon"
            aria-label="Shopping cart"
            render={<Link href="/cart" />}
          >
            <ShoppingCart />
          </Button>
          <Button
            className="text-[#A5ABB1]"
            variant="ghost"
            render={<Link href="/sign-in" />}
          >
            Sign in
          </Button>
          <Button
            className="text-[#131313] gradient h-10 px-4"
            render={<Link href="/sign-up" />}
          >
            Sign up
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Shopping cart"
            render={<Link href="/cart" />}
          >
            <ShoppingCart />
          </Button>
          <Sheet>
            <SheetTrigger
              className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-muted"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>GadgetMaster</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto grid gap-2 border-t pt-5">
                <SheetClose
                  render={<Link href="/sign-in" />}
                  className="inline-flex h-9 items-center justify-center rounded-lg border text-sm font-medium hover:bg-muted"
                >
                  Sign in
                </SheetClose>
                <SheetClose
                  render={<Link href="/sign-up" />}
                  className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80"
                >
                  Sign up
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
