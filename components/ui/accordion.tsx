"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "cn";

function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn("border-b border-white/[0.08]", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn("group flex flex-1 items-center justify-between gap-4 py-5 text-left text-sm font-medium text-white transition-colors hover:text-[#9ce7eb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DD3DD] sm:py-6 sm:text-base", className)}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-white/45 transition-transform duration-200 group-data-[panel-open]:rotate-180 group-data-[panel-open]:text-[#7DD3DD]" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn("overflow-hidden text-sm leading-7 text-white/55", className)}
      {...props}
    >
      <div className="pb-5 pr-8 sm:pb-6">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
