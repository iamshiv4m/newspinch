"use client";

import { useState } from "react";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SponsorContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-lg text-center px-4">
          <CheckCircle size={64} className="mx-auto mb-6 text-green-500" />
          <h1 className="font-display text-3xl font-bold text-np-blue">
            Thank You!
          </h1>
          <p className="mt-4 text-np-gray-500">
            We&apos;ve received your inquiry. Our business team will get back to
            you within 24 hours.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-np-blue font-semibold hover:underline"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="gradient-hero text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/sponsors"
            className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Sponsors
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-bold">
            Sponsor with Us
          </h1>
          <p className="mt-2 text-white/70">
            Fill in your details and our team will reach out shortly.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                Full Name *
              </label>
              <Input placeholder="Your name here" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                Designation
              </label>
              <Input placeholder="Your designation at your company" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                  Email *
                </label>
                <Input type="email" placeholder="you@company.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                  Mobile No.
                </label>
                <Input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                  Industry
                </label>
                <Input placeholder="e.g. FMCG, Tech, Education" />
              </div>
              <div>
                <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                  Budget Range
                </label>
                <Input placeholder="e.g. ₹5L - ₹10L" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-np-gray-700 mb-1.5">
                Message / Interest
              </label>
              <Textarea
                placeholder="Tell us about your brand and what you're looking for..."
                rows={4}
              />
            </div>
            <div className="flex gap-4 pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Inquiry"} <Send size={16} />
              </Button>
              <Button type="reset" variant="ghost" size="lg">
                Clear
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
