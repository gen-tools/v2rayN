"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (items.length === 0) {
    return (
      <div id="faq-empty" className="text-center py-12 text-neutral-500 dark:text-neutral-400">
        No FAQs match your search criteria. Try a different query.
      </div>
    );
  }

  return (
    <div id="faq-accordion-container" className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all overflow-hidden ${
              isOpen
                ? "border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/40 shadow-sm"
                : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/10 hover:border-neutral-300 dark:hover:border-neutral-700"
            }`}
          >
            <button
              id={`faq-trigger-${idx}`}
              onClick={() => toggleIndex(idx)}
              className="w-full flex items-start gap-4 p-5 text-left font-medium text-neutral-900 dark:text-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
            >
              <HelpCircle className="w-5 h-5 mt-0.5 text-blue-500 shrink-0" />
              <span className="flex-1 text-sm md:text-base pr-4 font-semibold">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-neutral-900 dark:text-neutral-100" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-neutral-100 dark:border-neutral-800/80 text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed whitespace-pre-line pl-14">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
