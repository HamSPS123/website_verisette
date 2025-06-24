import Image from "next/image";
import { ArrowRight, MessageSquare, ClipboardCheck, Code, Server, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We start by understanding your business needs, challenges, and goals through a detailed consultation.",
      icon: <MessageSquare className="h-10 w-10" />,
      color: "bg-blue-50 dark:bg-blue-950/40",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Solution Design",
      description: "Our experts design a tailored IT solution that addresses your specific requirements and aligns with your business objectives.",
      icon: <ClipboardCheck className="h-10 w-10" />,
      color: "bg-indigo-50 dark:bg-indigo-950/40",
      textColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      title: "Development & Implementation",
      description: "We develop and implement the solution using industry best practices and cutting-edge technologies.",
      icon: <Code className="h-10 w-10" />,
      color: "bg-violet-50 dark:bg-violet-950/40",
      textColor: "text-violet-600 dark:text-violet-400",
    },
    {
      title: "Support & Maintenance",
      description: "We provide ongoing support and maintenance to ensure your systems run smoothly and efficiently at all times.",
      icon: <Server className="h-10 w-10" />,
      color: "bg-fuchsia-50 dark:bg-fuchsia-950/40",
      textColor: "text-fuchsia-600 dark:text-fuchsia-400",
    },
  ];

  return (
    <section id="how-it-works" className="w-full py-8 md:py-12 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container max-w-[1400px] px-4 md:px-6 mx-auto relative">
        {/* Decorative background elements */}
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div 
              className="aspect-[1155/678] w-[36.125rem] bg-gradient-to-tr from-primary/30 to-primary/10 opacity-30" 
              style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}>
            </div>
          </div>
        </div> */}
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              How We Deliver IT Excellence
            </h2>
            <p className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our proven four-step methodology ensures successful delivery of IT solutions tailored to your business needs
            </p>
          </div>
        </div>
        
        {/* Desktop version with connecting lines */}
        <div className="hidden lg:flex justify-between max-w-6xl mx-auto mt-16 mb-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 w-64">
              <div className={`flex h-20 w-20 items-center justify-center rounded-full ${step.color} ${step.textColor} shadow-sm mb-4 border border-slate-100 dark:border-slate-800`}>
                {step.icon}
              </div>
              <div className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-slate-800 font-semibold shadow-md">
                {index + 1}
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-10 -right-8 transform translate-x-full">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile version with vertical layout */}
        <div className="lg:hidden mx-auto max-w-md space-y-8 py-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 relative">
              <div className="flex-shrink-0">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color} ${step.textColor} shadow-sm border border-slate-100 dark:border-slate-800`}>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-semibold shadow-md">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-px bg-gradient-to-b from-primary to-violet-500"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="text-slate-800">
            <Link href="/contact">
              Schedule a Consultation
              <CheckCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
export default HowItWorks;
