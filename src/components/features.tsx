import { Check, Code, Server, Database, Shield, Users, Cpu, Headset } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Expertise
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              Comprehensive IT Solutions
            </h2>
            <p className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Verisette delivers professional IT services tailored to meet your business needs and drive digital transformation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Software Development</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Custom software solutions designed to address your specific business challenges and requirements.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Web & Mobile Applications</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Enterprise Software Solutions</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Database className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Database Management</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Comprehensive database solutions to store, manage, and protect your valuable business data.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Database Design & Optimization</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Data Migration & Integration</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Server className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">System Integration</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Seamlessly connect your existing systems and applications for improved efficiency and data flow.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">API Development & Integration</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Legacy System Modernization</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Shield className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Protect your business from cyber threats with our comprehensive security solutions and services.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Security Assessments & Audits</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Threat Detection & Response</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">IT Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Design, implement, and manage robust IT infrastructure to support your business operations.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Network Design & Implementation</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Cloud Migration & Management</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Headset className="h-7 w-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">IT Consulting</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Expert guidance to help you make informed technology decisions aligned with your business goals.
              </p>
            </div>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">IT Strategy Development</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Digital Transformation Planning</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Features };
export default Features;
