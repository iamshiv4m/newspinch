import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers, openRoles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Join The Team",
  description: "We're journalists, creators, and technologists reimagining news for a digital-first India. Join us.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Meet the <span className="text-np-yellow">Team</span>
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            We&apos;re journalists, creators, and technologists reimagining news for a digital-first India.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-np-blue text-center mb-12">Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.name} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="h-72 relative overflow-hidden bg-np-yellow">
                  <Image
                    src={`/images/team/${member.name.split(' ')[0].toLowerCase()}.png`}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-np-gray-900">{member.name}</h3>
                  <p className="text-sm font-medium text-np-blue mt-1">{member.role}</p>
                  <p className="text-sm text-np-gray-500 mt-3">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 sm:py-20 bg-np-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8">
              Why You Should <span className="text-np-yellow">Join Us</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Be part of a revolutionary, AI-powered creator-led news platform.",
                "Work on stories that reach millions across India's digital platforms.",
                "Learn and grow at the intersection of journalism, technology, and entrepreneurship.",
                "Collaborate directly with founders and shape a new-age media brand.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 rounded-xl bg-white/10 p-4">
                  <span className="text-np-yellow font-bold text-lg">0{i + 1}</span>
                  <p className="text-sm text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-np-blue text-center mb-4">Open Positions</h2>
          <p className="text-center text-np-gray-500 mb-10">Come build the future of Indian news media with us.</p>
          <div className="max-w-3xl mx-auto space-y-3">
            {openRoles.map((role) => (
              <Card key={role.title} className="hover:shadow-md transition-all">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-np-gray-900">{role.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-xs text-np-gray-500">
                        <Briefcase size={12} /> {role.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-np-gray-500">
                        <MapPin size={12} /> {role.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdeEExB8oWskMLF3WwCaBY_EGdj5tHYjLcGkXO97L2qGG7-AQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors shrink-0"
                  >
                    Apply <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
