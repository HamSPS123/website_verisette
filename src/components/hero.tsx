import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full py-4 md:py-8 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="container max-w-[1400px] px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              IT Services & Solutions
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                Professional IT Services for Your Business
              </h1>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl">
                Verisette provides comprehensive IT solutions to help your business grow, innovate, and succeed in today's digital landscape.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg">
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                <span>IT Consulting</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                <span>System Integration</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30"></div>
            <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl dark:bg-blue-900/30"></div>
            <div className="relative z-10">
              <Image
                src="/images/hero.png"
                alt="IT Services Hero Image"
                width={550}
                height={550}
                className="rounded-xl drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
