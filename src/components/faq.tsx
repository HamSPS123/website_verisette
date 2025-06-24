import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { MessageCircleQuestion, Search } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with Verisette?",
    answer:
      "Getting started is easy! Simply sign up for an account, download the app, and follow the onboarding process. Our intuitive interface will guide you through the setup process step by step. You can be up and running in less than 5 minutes.",
    category: "Getting Started",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise plans, we also offer invoicing options with flexible payment terms to accommodate your organization's procurement process.",
    category: "Billing",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time with no questions asked. Your service will continue until the end of your current billing period, and you won't be charged again. All your data remains accessible for 30 days after cancellation, giving you time to export if needed.",
    category: "Billing",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a comprehensive 14-day free trial on all our plans. No credit card is required to start your trial, and you can upgrade or cancel at any time. The trial includes full access to all features so you can thoroughly evaluate if Verisette is right for your needs.",
    category: "Getting Started",
  },
  {
    question: "How secure is my data with Verisette?",
    answer:
      "We take security extremely seriously. All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We use industry-standard security protocols, implement strict access controls, and regularly undergo third-party security audits to ensure your data remains protected. We are also compliant with GDPR, CCPA, and SOC 2 Type II standards.",
    category: "Security",
  },
  {
    question: "Do you offer discounts for nonprofits or educational institutions?",
    answer:
      "Yes! We're proud to support nonprofits and educational institutions with special pricing. Eligible organizations can receive up to 50% off our standard pricing. Please contact our sales team with proof of your organization's status to apply for this discount.",
    category: "Billing",
  },
  {
    question: "Can I integrate Verisette with my existing tools?",
    answer:
      "Absolutely! Verisette offers seamless integration with over 100 popular business tools including Slack, Microsoft 365, Google Workspace, Salesforce, Jira, and many more. We also provide a robust API for custom integrations with your proprietary systems.",
    category: "Features",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with a 24-hour response time. Business and Enterprise plans also receive priority support with a dedicated customer success manager and phone support during business hours. Enterprise customers additionally get 24/7 emergency support for critical issues.",
    category: "Support",
  },
];

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4">
            FAQ
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We're here to help. If you don't see your question
              here, feel free to contact our support team.
            </p>
          </div>
          
          {/* Search bar - for visual design only */}
          <div className="relative max-w-md w-full mt-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input 
              type="search" 
              className="block w-full p-4 pl-10 text-sm text-slate-900 border border-slate-200 rounded-lg bg-white focus:ring-primary focus:border-primary dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:focus:ring-primary dark:focus:border-primary" 
              placeholder="Search frequently asked questions..."
            />
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl space-y-8 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="hidden md:block space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">Categories</h3>
              <div className="space-y-2">
                {Array.from(new Set(faqs.map(faq => faq.category))).map((category, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary cursor-pointer">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{category}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 border border-primary/20 rounded-lg bg-primary/5">
                <div className="flex items-center space-x-3">
                  <MessageCircleQuestion className="h-10 w-10 text-primary" />
                  <h4 className="font-medium text-slate-900 dark:text-white">Need more help?</h4>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Our support team is just a click away</p>
                <button className="mt-3 w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-slate-200 dark:border-slate-800 rounded-lg mb-4 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-900/60 text-slate-900 dark:text-white font-medium">
                      <div className="flex items-center">
                        <span className="text-primary mr-3 text-sm font-semibold">0{index + 1}</span>
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-slate-600 dark:text-slate-300">
                      <div className="pl-7">
                        {faq.answer}
                        <div className="mt-2 flex items-center text-sm">
                          <span className="text-primary font-medium">Category:</span>
                          <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300">Still have questions?</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              Contact Us
            </a>
            <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800">
              Browse Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
