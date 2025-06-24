import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Building, Users, Award, Globe } from "lucide-react";

export const metadata = {
  title: "About Us | Verisette",
  description: "Learn about Verisette, a professional IT solutions provider established in 2009 with expertise in software solutions and testing.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                  About Verisette
                </h1>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
                  Your professional IT solutions provider established from a group of software solution and testing professionals in 2009.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="h-24 w-24 text-primary opacity-20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Established 2009</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Professional Experience in IT
              </h2>
              <p className="text-slate-600 dark:text-slate-400 md:text-lg">
                Verisette was established from a group of software solution and testing professional resources in 2009. We have strong focus on large-scale financial and banking systems with expertise in software development, integration, and quality assurance.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-white">Software Solutions and Integration</span> - Developing custom software solutions tailored to business needs
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-white">Testing and Quality Assurance</span> - Ensuring software reliability and performance
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-white">Project Management</span> - Managing large-scale software projects from inception to completion
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-white">IT Consulting</span> - Providing expert advice on technology strategy and implementation
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <Users className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Experienced Team</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our team consists of experienced professionals with expertise in various aspects of IT solutions and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Our Clients
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Trusted by Leading Organizations
              </h2>
              <p className="max-w-[900px] text-slate-600 dark:text-slate-400 md:text-lg">
                We have varied experience with clients including major banks, insurance companies, telecommunications providers, and multinational organizations.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-center">
                <p className="font-medium text-slate-900 dark:text-white">Kasikorn Bank</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Financial</p>
              </div>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-center">
                <p className="font-medium text-slate-900 dark:text-white">Siam Commercial</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Insurance</p>
              </div>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-center">
                <p className="font-medium text-slate-900 dark:text-white">Samart Telcom</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Telecommunications</p>
              </div>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-center">
                <p className="font-medium text-slate-900 dark:text-white">Advance Info Service</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Technology</p>
              </div>
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <div className="text-center">
                <p className="font-medium text-slate-900 dark:text-white">Thomson Reuters</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Software</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Our Values
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                What Drives Us
              </h2>
              <p className="max-w-[900px] text-slate-600 dark:text-slate-400 md:text-lg">
                At Verisette, we are guided by a set of core values that define how we work and serve our clients.
              </p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Excellence</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Collaboration</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                We believe in working closely with our clients, understanding their needs, and delivering tailored solutions.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Innovation</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                We embrace innovation and stay at the forefront of technology to provide cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-lg">
                Contact us today to learn how our IT solutions can help your business grow and succeed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
