'use client';

import { useState } from 'react';
import { Check, X, CreditCard, Users, Zap, Shield, HelpCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: "Free",
      price: { monthly: "$0", annual: "$0" },
      description: "Perfect for individuals getting started",
      features: [
        { name: "1 user", included: true },
        { name: "5 projects", included: true },
        { name: "Basic analytics", included: true },
        { name: "24-hour support", included: true },
        { name: "Community access", included: true },
        { name: "API access", included: false },
        { name: "Custom integrations", included: false },
        { name: "Advanced security", included: false },
      ],
      popular: false,
      color: "bg-slate-100 dark:bg-slate-800",
      icon: <Users className="h-6 w-6 text-slate-600 dark:text-slate-300" />,
    },
    {
      name: "Pro",
      price: { monthly: "$29", annual: "$19" },
      description: "Best for professionals and freelancers",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "4-hour support", included: true },
        { name: "Phone support", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced security", included: false },
      ],
      popular: true,
      color: "bg-primary/10 dark:bg-primary/20",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      name: "Enterprise",
      price: { monthly: "$99", annual: "$79" },
      description: "For teams and growing organizations",
      features: [
        { name: "Unlimited users", included: true },
        { name: "Unlimited projects", included: true },
        { name: "Advanced analytics", included: true },
        { name: "1-hour support", included: true },
        { name: "Priority phone support", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Advanced security", included: true },
      ],
      popular: false,
      color: "bg-indigo-50 dark:bg-indigo-950/40",
      icon: <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  const savings = {
    Pro: "$120",
    Enterprise: "$240",
  };

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 relative">
        {/* Decorative elements */}
        <div className="absolute left-1/4 top-0 -z-10 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-30 dark:bg-blue-900/20"></div>
        <div className="absolute right-1/4 bottom-0 -z-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-30 dark:bg-indigo-900/20"></div>
        
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            Pricing Plans
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the perfect plan for your needs. No hidden fees. No surprises.
            </p>
          </div>
          
          {/* Billing toggle */}
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 rounded-lg border border-slate-200 p-1 dark:border-slate-800">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  billingCycle === 'monthly'
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                  billingCycle === 'annual'
                    ? "bg-primary text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                Annual
              </button>
            </div>
            {billingCycle === 'annual' && (
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
                <Star className="mr-1 h-3 w-3" />
                Save up to 35%
              </span>
            )}
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-slate-900",
                plan.popular 
                  ? "border-primary ring-2 ring-primary/20" 
                  : "border-slate-200 dark:border-slate-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-7 rotate-45 bg-primary px-12 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center space-x-4">
                <div className={cn("rounded-lg p-2", plan.color)}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
              </div>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {plan.price[billingCycle]}
                </span>
                <span className="ml-1 text-base font-medium text-slate-500 dark:text-slate-400">
                  /month
                </span>
                {billingCycle === 'annual' && plan.name !== 'Free' && (
                  <span className="ml-2 text-sm text-green-600 dark:text-green-400">
                    Save {savings[plan.name as keyof typeof savings]}
                  </span>
                )}
              </div>
              
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {plan.description}
              </p>
              
              <div className="mt-6">
                <Button
                  className={cn(
                    "w-full justify-center",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : "bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                  )}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  {plan.name === 'Free' ? 'Sign up' : 'Subscribe'}
                </Button>
              </div>
              
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <X className="mr-2 h-4 w-4 text-slate-400" />
                    )}
                    <span className={cn(
                      feature.included 
                        ? "text-slate-700 dark:text-slate-300" 
                        : "text-slate-500 dark:text-slate-500"
                    )}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-primary/10 p-2 dark:bg-primary/20">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Need a custom plan?</h3>
                <p className="text-slate-600 dark:text-slate-400">Contact us for a tailored solution to meet your specific requirements.</p>
              </div>
            </div>
            <Button className="whitespace-nowrap bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
export default Pricing;
