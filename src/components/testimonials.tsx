import Image from "next/image";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how we manage our projects. The interface is intuitive and the features are exactly what we needed for our growing team.",
      author: "Sarah Johnson",
      title: "Product Manager at Acme Inc.",
      avatar: "/avatars/avatar-1.png",
      rating: 5,
    },
    {
      quote: "I've tried many similar tools, but Verisette stands out for its ease of use and powerful analytics. The dashboard gives me insights I never had before.",
      author: "Michael Chen",
      title: "CEO, TechStart",
      avatar: "/avatars/avatar-2.png",
      rating: 5,
    },
    {
      quote: "The customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it within hours, not days.",
      author: "Emily Rodriguez",
      title: "Operations Director",
      avatar: "/avatars/avatar-3.png",
      rating: 5,
    },
    {
      quote: "We've seen a 40% increase in team productivity since implementing this solution. The collaboration features are game-changing for our remote team.",
      author: "David Park",
      title: "Engineering Lead",
      avatar: "/avatars/avatar-4.png",
      rating: 5,
    },
    {
      quote: "The integration capabilities saved us countless hours of development time. We connected all our existing tools in minutes, not weeks.",
      author: "Sophia Martinez",
      title: "CTO, InnovateCorp",
      avatar: "/avatars/avatar-5.png",
      rating: 5,
    },
    {
      quote: "The security features give me peace of mind knowing our sensitive data is protected. Compliance was a breeze with the built-in tools.",
      author: "James Wilson",
      title: "Security Officer",
      avatar: "/avatars/avatar-6.png",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it — hear from some of our satisfied clients who have transformed their businesses
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">          
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl" aria-hidden="true">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary/30 to-primary/10 opacity-30" 
                 style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <Quote className="h-8 w-8 text-primary/20" />
              <blockquote className="mt-4">
                <p className="text-slate-600 dark:text-slate-300">"{testimonial.quote}"</p>
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100 ring-2 ring-primary/10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            View all testimonials
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
export default Testimonials;
