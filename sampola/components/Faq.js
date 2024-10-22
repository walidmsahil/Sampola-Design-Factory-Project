'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"


export default function FAQSection({faqItems,btn,title}) {
  
  const [visibleItems, setVisibleItems] = useState(3)

  const loadMore = () => {
    setVisibleItems(prevItems => Math.min(prevItems + 3, faqItems.length))
  }
  
  return (
    <section className="mb-16">
      <h2 className="text-3xl mb-8 font-bold text-primary dark:text-[#C0CFB2]">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.slice(0, visibleItems).map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-[#C0CFB2]">
            <AccordionTrigger className="text-lg font-semibold text-primary text-left dark:text-[#F5F7EE]">{item.question}</AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {visibleItems < faqItems.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} className="bg-primary hover:dark:bg-primary hover:dark:text-[#C0CFB2] dark:bg-[#C0CFB2] hover:bg-[#C0CFB2] text-[#F5F7EE] dark:text-[#151515] hover:text-[#151515] px-6 py-2 rounded-full transition duration-300 select-none">
            {btn}
          </Button>
        </div>
      )}
    </section>
  )
}