import { BadgeHelp, MessageCircle } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "How long does delivery usually take?",
    answer: "Orders are usually delivered within 2–5 business days, depending on your location. Once your order ships, we’ll share tracking details so you can follow its progress.",
  },
  {
    question: "Can I return or exchange a product?",
    answer: "Yes. If your item is unused and in its original packaging, you can request a return or exchange within 7 days of delivery. Contact our support team and we’ll guide you through the steps.",
  },
  {
    question: "Are the gadgets covered by a warranty?",
    answer: "Most products include a manufacturer warranty. The coverage period can vary by item, so check the product details or contact us before ordering if you need help confirming it.",
  },
  {
    question: "What payment methods can I use?",
    answer: "You can pay using the payment options shown at checkout. Available methods may vary by delivery location, and the final total is shown before you place your order.",
  },
  {
    question: "How can I get help choosing a gadget?",
    answer: "Tell us what you need and how you plan to use it. Our support team can help compare options and find a gadget that fits your everyday setup.",
  },
];

const Faq = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#0c0e10] py-16 text-white sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-10 size-96 rounded-full bg-[#89CFF0]/[0.06] blur-[110px]" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div className="max-w-lg">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#8bd9df]">
              <BadgeHelp className="size-4" /> Here to help
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Frequently asked <span className="bg-gradient-to-r from-[#7DD3DD] to-[#A7C8F7] bg-clip-text text-transparent">questions.</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
              Need a little more info before picking your next gadget? Here are answers to the things customers ask us most.
            </p>
            <a href="mailto:support@gadgetmaster.com" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#9ce7eb] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7DD3DD]">
              <MessageCircle className="size-4" /> Still have a question? Contact us
            </a>
          </div>

          <Accordion className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 sm:rounded-3xl sm:px-6" defaultValue={["delivery"]}>
            {questions.map(({ question, answer }, index) => {
              const value = ["delivery", "returns", "warranty", "payment", "support"][index];
              return (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
