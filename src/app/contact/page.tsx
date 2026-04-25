"use client";

import { useState } from "react";
import { MapPin, Mail, Send, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  const [storySubmitted, setStorySubmitted] = useState(false);

  function handleStorySubmit(e: React.FormEvent) {
    e.preventDefault();
    setStorySubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Get in <span className="text-np-yellow">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Have a story tip, want to join our team, or interested in partnering? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Two CTAs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story Pitch */}
            <Card className="overflow-hidden">
              <div className="h-3 gradient-hero" />
              <CardContent className="p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-np-blue">Got an Interesting Story?</h2>
                <p className="mt-2 text-np-gray-500 text-sm">
                  If you&apos;ve got a story that deserves to be heard, share your idea or ground report, and our editorial team will connect with you.
                </p>

                {storySubmitted ? (
                  <div className="mt-6 text-center py-8">
                    <CheckCircle size={48} className="mx-auto mb-3 text-green-500" />
                    <p className="font-semibold text-np-gray-900">Story pitch sent!</p>
                    <p className="text-sm text-np-gray-500 mt-1">Our editorial team will review and get back to you.</p>
                  </div>
                ) : (
                  <form onSubmit={handleStorySubmit} className="mt-6 space-y-4">
                    <Input placeholder="Your name" required />
                    <Input type="email" placeholder="Your email" required />
                    <Input placeholder="Story headline / topic" required />
                    <Textarea placeholder="Brief description of the story..." rows={3} required />
                    <Button type="submit" variant="secondary" className="w-full">
                      Submit Story Pitch <Send size={16} />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Join Team */}
            <Card className="overflow-hidden">
              <div className="h-3 gradient-yellow" />
              <CardContent className="p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-np-blue">Want to Join the Team?</h2>
                <p className="mt-2 text-np-gray-500 text-sm">
                  We&apos;re journalists, creators, and technologists reimagining news for a digital-first India.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-np-bg p-6 text-center">
                    <p className="text-np-gray-700 mb-4">
                      Apply through our open positions or send us a direct application.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdeEExB8oWskMLF3WwCaBY_EGdj5tHYjLcGkXO97L2qGG7-AQ/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-np-yellow px-6 py-3 font-semibold text-np-blue-dark hover:bg-np-yellow-light transition-all shadow-md hover:shadow-lg"
                    >
                      Work with Us <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-20 bg-np-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Contact <span className="text-np-yellow">Information</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl bg-white/10 p-6">
                <MapPin size={24} className="mx-auto mb-3 text-np-yellow" />
                <p className="text-sm">{siteConfig.address}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6">
                <Mail size={24} className="mx-auto mb-3 text-np-yellow" />
                <p className="text-xs text-white/60 mb-1">Business</p>
                <p className="text-sm">{siteConfig.emails.business}</p>
              </div>
              <div className="rounded-xl bg-white/10 p-6">
                <Mail size={24} className="mx-auto mb-3 text-np-yellow" />
                <p className="text-xs text-white/60 mb-1">Editorial</p>
                <p className="text-sm">{siteConfig.emails.editorial}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
