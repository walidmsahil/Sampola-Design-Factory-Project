'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqItems = [
  {
    question: "What is Sampola's primary goal?",
    answer: "Our primary goal is to create more job opportunities for individuals with disabilities and marginalized groups, while encouraging businesses to fulfill their social responsibilities."
  },
  {
    question: "What services does Sampola offer?",
    answer: "Sampola offers work support, community services, recycling projects, and outsourcing services in collaboration with businesses."
  },
  {
    question: "How does Sampola promote sustainability?",
    answer: "We promote sustainability by recycling materials and transforming them into eco-friendly products that support environmental sustainability."
  },
  {
    question: "How can businesses partner with Sampola?",
    answer: "Businesses can partner with Sampola through our outsourcing services, sponsorship programs, or by participating in our recycling initiatives."
  },
  {
    question: "What types of jobs does Sampola provide for individuals with disabilities?",
    answer: "Sampola provides a variety of jobs including assembly work, packaging, recycling operations, and administrative tasks, tailored to individual abilities and skills."
  }
]

export default function FAQSection() {
  const [visibleItems, setVisibleItems] = useState(3)

  const loadMore = () => {
    setVisibleItems(prevItems => Math.min(prevItems + 3, faqItems.length))
  }
  
  return (
    <section className="mb-16">
      <h2 className="text-3xl mb-8 font-bold text-primary dark:text-[#C0CFB2]">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.slice(0, visibleItems).map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-gray-200">
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
            Load More
          </Button>
        </div>
      )}
    </section>
  )
}