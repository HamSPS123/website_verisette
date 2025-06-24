'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setShowScrollTop(window.scrollY > 300); // Show scroll-to-top button after scrolling 300px
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95' : 'bg-transparent backdrop-blur-sm border-transparent'}`}>
      <div className="container max-w-[1400px] mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.svg" alt="Verisette Logo"  className="w-46 h-full object-contain"  />
          {/* <span className="text-xl font-bold text-slate-900 dark:text-white">Verisette</span> */}
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
            Home
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/about' ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
            About Us
          </Link>
          <Link href="/products" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/products' ? 'text-primary-500' : 'text-slate-800 dark:text-white'}`}>
            Products
          </Link>
          <Link href="/services" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/services' ? 'text-primary-500' : 'text-slate-800 dark:text-white'}`}>
            Services
          </Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/contact' ? 'text-primary' : 'text-slate-800 dark:text-white'}`}>
            Contact Us
          </Link>
        </nav>
        <div className="flex md:hidden items-center gap-4">
          <button
            className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden ${scrolled ? 'text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200' : 'text-slate-100 hover:bg-white/10 hover:text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <Link 
              href="/" 
              className="block py-2 text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="block py-2 text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/products" 
              className="block py-2 text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/services" 
              className="block py-2 text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block py-2 text-base font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
    
    {/* Scroll to top button */}
    {showScrollTop && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    )}
    </>
  );
};

export default Header;
