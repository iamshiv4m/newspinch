"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
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
      <div className="rounded-2xl gradient-yellow p-8 sm:p-12 text-center">
        <CheckCircle size={48} className="mx-auto mb-4 text-np-blue" />
        <h3 className="font-display text-2xl font-bold text-np-blue-dark">
          You&apos;re In!
        </h3>
        <p className="mt-2 text-np-blue-dark/70">
          Check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl gradient-yellow p-8 sm:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-np-blue-dark">
          Stay Informed, Stay Ahead
        </h3>
        <p className="mt-3 text-np-blue-dark/70">
          Get the top stories delivered to your inbox every morning. No spam,
          just credible news.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 border-np-blue-dark/20 bg-white"
          />
          <Button type="submit" variant="secondary" className="shrink-0">
            Subscribe <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}
