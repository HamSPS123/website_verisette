import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact Us | Verisette",
  description: "Get in touch with Verisette for professional IT solutions and services. We're here to help your business succeed.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                  Contact Us
                </h1>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
                  We're here to help. Get in touch with our team for any inquiries or to discuss how we can support your business.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact-form">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">
                    Our Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Mail className="h-24 w-24 text-primary opacity-20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Contact Item 1 */}
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Our Location</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Central Plaza Chaengwattana Office Tower, 9th Floor<br />
                99/9 Moo2 Chaengwattana Road<br />
                Bangtalad, Pakkred<br />
                Nonthaburi 11120<br />
                Thailand
              </p>
            </div>

            {/* Contact Item 2 */}
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Phone</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Telephone: +66 (0)2 193 8157<br />
                FAX: +66 (0)2 731 1763<br />
                Mobile: +66 (0)94 895 6666
              </p>
            </div>

            {/* Contact Item 3 */}
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Email</h3>
              <p className="text-slate-600 dark:text-slate-400">
                E-Mail: opasvt@verisette.com<br />
                <br />
                For general inquiries:<br />
                info@verisette.com
              </p>
            </div>

            {/* Contact Item 4 */}
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Business Hours</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Monday - Friday<br />
                9:00 AM - 6:00 PM<br />
                <br />
                Saturday - Sunday<br />
                Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-[800px]">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Send Us a Message
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-900 dark:text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-900 dark:text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-900 dark:text-white">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-900 dark:text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
              Our Location
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Visit us at our office in Central Plaza Chaengwattana.
            </p>
          </div>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
            <div className="h-full w-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
              <p className="text-slate-600 dark:text-slate-400 text-center px-4">
                Map of Central Plaza Chaengwattana Office Tower<br />
                99/9 Moo2 Chaengwattana Road, Bangtalad, Pakkred, Nonthaburi 11120, Thailand
              </p>
            </div>
          </div>
          
          {/* CTA Below Map */}
          <div className="mt-10 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Ready to get started?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Contact us today or schedule a meeting to discuss your IT needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="#contact-form">
                  Contact Us Now
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="tel:+66021938157">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
