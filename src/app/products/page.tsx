import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Box, Shield, Cpu, Database } from "lucide-react";

export const metadata = {
  title: "Products | Verisette",
  description: "Explore Verisette's innovative IT products for software testing, financial solutions, and enterprise management.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900 dark:text-white">
                  Our Products
                </h1>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
                  Innovative IT solutions designed to enhance your business operations and drive growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                >
                  Request Demo
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
                  <Box className="h-24 w-24 text-primary opacity-20" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Enterprise Solutions</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              Our Featured Products
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl">
              Powerful solutions designed to meet your business needs and drive innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Product 1 */}
            <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">VerisecureTest</h3>
              <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">
                Comprehensive testing solution for financial applications with enhanced security features and compliance checks.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Automated security testing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Compliance verification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Real-time vulnerability detection</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">VeriBankPro</h3>
              <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">
                Banking software solution with integrated financial management tools and secure transaction processing.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Secure transaction processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Financial reporting tools</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Regulatory compliance features</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">VeriEnterprise</h3>
              <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">
                Enterprise resource planning solution with integrated modules for business management and analytics.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Integrated business modules</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">Scalable architecture</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-800"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="w-full py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Why Choose Our Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Built for Enterprise Performance
              </h2>
              <p className="text-slate-600 dark:text-slate-400 md:text-lg">
                Our products are designed with enterprise-grade performance in mind, ensuring reliability, security, and scalability for businesses of all sizes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-400">Enterprise-grade security features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-400">Scalable architecture for growing businesses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-400">Comprehensive documentation and support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                  <span className="text-slate-600 dark:text-slate-400">Regular updates and maintenance</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Businesses</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-[80%] mx-auto">
                      Our products are used by leading financial institutions and enterprises across Thailand and Southeast Asia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-slate-950">
        <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900 dark:text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-lg">
                Contact us today to learn how our products can help your business grow and succeed.
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
