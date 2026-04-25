import type { Metadata } from "next";
import { ShieldCheck, Bot, AlertCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Trust & Standards",
  description: "Our commitment to accuracy, fairness, and transparency in AI-assisted journalism.",
};

const standards = [
  {
    icon: ShieldCheck,
    title: "Accuracy & Fairness",
    description: "We verify every fact before publishing. Our creators and editors follow strict guidelines to ensure balanced coverage, multiple perspectives, and zero sensationalism.",
  },
  {
    icon: Bot,
    title: "AI-assisted, Editor-verified",
    description: "AI helps us move faster — from transcription to research — but all content is reviewed and verified by human editors before going live. Every story is clearly labeled if AI assistance was used.",
  },
  {
    icon: AlertCircle,
    title: "Open Corrections",
    description: "If we make a mistake, we fix it transparently. Audiences can report errors directly, and corrections are published openly for accountability.",
  },
];

const corrections = [
  {
    date: "2026-04-20",
    article: "Lok Sabha Budget Session Highlights",
    correction: "The original article stated allocation of ₹50,000 Cr for infrastructure. The correct figure is ₹52,000 Cr. Updated.",
  },
  {
    date: "2026-04-15",
    article: "ISRO Mission Timeline",
    correction: "The target date for the crewed mission was incorrectly stated as 2027. The confirmed target is 2028.",
  },
];

export default function TrustPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-yellow py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-np-blue-dark">
            Trust & <span className="text-np-red">Standards</span>
          </h1>
          <p className="mt-4 text-lg text-np-blue-dark/70 max-w-2xl mx-auto">
            Our commitment to accuracy, fairness, and transparency in every story we tell.
          </p>
        </div>
      </section>

      {/* Standards Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((standard) => (
              <Card key={standard.title} className="hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                <CardContent className="p-8">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-np-blue/10 mb-5">
                    <standard.icon size={32} className="text-np-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-np-gray-900">{standard.title}</h3>
                  <p className="mt-3 text-sm text-np-gray-500 leading-relaxed">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-np-blue px-6 py-3 text-white font-semibold">
              <Sparkles size={18} className="text-np-yellow" />
              Assisted by AI. Verified by Editors.
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="py-16 sm:py-20 bg-np-blue text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-8">
            Our <span className="text-np-yellow">AI Usage Policy</span>
          </h2>
          <div className="space-y-4 text-white/80">
            <p>At News Pinch, we believe AI should enhance journalism — not replace it. Here&apos;s how we use AI responsibly:</p>
            <ul className="space-y-3">
              {[
                "AI assists with research, transcription, and initial drafts — never final editorial decisions.",
                "Every AI-generated or AI-assisted piece is reviewed by a human editor before publication.",
                "All content using AI is transparently labeled with our 'AI Assisted' badge.",
                "We never use AI to generate fake quotes, manipulate images, or fabricate sources.",
                "Our AI models are regularly audited for bias and accuracy.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-np-yellow shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Public Corrections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-np-blue text-center mb-4">
            Public Corrections Log
          </h2>
          <p className="text-center text-np-gray-500 mb-10">
            Transparency is accountability. Here are our recent corrections.
          </p>
          <div className="space-y-4">
            {corrections.map((c, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-np-gray-900">{c.article}</p>
                      <p className="text-sm text-np-gray-500 mt-1">{c.correction}</p>
                    </div>
                    <Badge variant="outline" className="shrink-0">{c.date}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
