"use client";

import { useState } from "react";
import { Send, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-np-blue-dark p-10 sm:p-14 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,193,7,0.12),transparent_60%)]" />
        <div className="relative">
          <CheckCircle size={48} className="mx-auto mb-4 text-np-yellow" />
          <h3 className="font-display text-2xl font-bold text-white">You&apos;re In!</h3>
          <p className="mt-2 text-white/50">Check your inbox to confirm your subscription.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-np-blue-dark p-10 sm:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,193,7,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-np-yellow/10 mb-6">
          <Mail size={24} className="text-np-yellow" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
          Stay Informed, Stay Ahead
        </h3>
        <p className="mt-3 text-white/50">
          Get the top stories delivered to your inbox every morning. No spam, just credible news.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white/10 border-white/10 text-white placeholder:text-white/30 focus:border-np-yellow focus:ring-np-yellow/20"
          />
          <Button type="submit" variant="primary" className="shrink-0">
            Subscribe <Send size={16} />
          </Button>
        </form>
        <p className="mt-4 text-xs text-white/30">Join 50,000+ subscribers. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
