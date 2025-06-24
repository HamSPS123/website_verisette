import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Mobile App
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
                Download Our App Today
              </h2>
              <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with our app and experience the full power of our platform. Available on iOS and Android.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 2L2 12 12 22 22 12 12 2z"/>
                  <path d="M12 22v-8"/>
                  <path d="M12 8V2"/>
                  <path d="M12 12H2"/>
                  <path d="M12 12h10"/>
                </svg>
                App Store
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-white shadow-lg transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Google Play
              </Link>
            </div>
            <div className="mt-6 flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <svg className="mr-1 h-4 w-4 fill-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free download</span>
              </div>
              <div className="flex items-center">
                <svg className="mr-1 h-4 w-4 fill-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Regular updates</span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-100 blur-3xl dark:bg-blue-900/30"></div>
            <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl dark:bg-blue-900/30"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="bg-slate-100 dark:bg-slate-800 h-10 w-full flex items-center px-4 space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-4">
                <div className="bg-blue-50 dark:bg-slate-800 h-[400px] w-full rounded-lg flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-500 opacity-20">Verisette App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTA };
export default CTA;
