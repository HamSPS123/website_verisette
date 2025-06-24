
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "50+ High-Rated Online Banking Mobile Apps on Playstore",
      excerpt: "Discover the top-rated banking applications that are revolutionizing how users manage their finances on mobile devices.",
      image: "/blog/banking-apps.jpg",
      date: "June 12, 2025",
      readTime: "5 min read",
      author: "Michael Chen",
      authorAvatar: "/avatars/avatar-2.png",
      slug: "50-high-rated-online-banking-mobile-apps-on-playstore",
      color: "bg-blue-100",
    },
    {
      title: "Latest Technology Trends in Modern Web Applications",
      excerpt: "Learn how modern applications are leveraging advanced technologies to provide better user experiences and functionality.",
      image: "/blog/tech-trends.jpg",
      date: "June 8, 2025",
      readTime: "7 min read",
      author: "Sarah Johnson",
      authorAvatar: "/avatars/avatar-1.png",
      slug: "latest-technology-trends-in-modern-web-applications",
      color: "bg-slate-100",
    },
    {
      title: "How to Grow Your Business with Digital Marketing",
      excerpt: "Explore effective digital marketing strategies that can help your business reach new customers and increase revenue.",
      image: "/blog/business-growth.jpg",
      date: "June 3, 2025",
      readTime: "4 min read",
      author: "David Wilson",
      authorAvatar: "/avatars/avatar-3.png",
      slug: "how-to-grow-your-business-with-digital-marketing",
      color: "bg-blue-100",
    },
  ];

  return (
    <section id="blog" className="py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Blog
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              Latest Articles
            </h2>
            <p className="max-w-[900px] text-slate-500 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay up to date with the latest news and articles from our blog
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className={`relative aspect-video overflow-hidden ${post.color} dark:bg-slate-800`}>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-500 opacity-20">
                    Verisette
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <div className="flex items-center">
                      <div className="relative mr-2 h-8 w-8 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-slate-600 dark:text-slate-300">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <span className="font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
                    </div>
                    <div className="ml-auto flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="ml-4 flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
