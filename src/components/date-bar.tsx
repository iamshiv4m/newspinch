"use client";

import { useLanguage } from "@/components/language-provider";

const HINDI_DAYS = [
  "रविवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "गुरुवार",
  "शुक्रवार",
  "शनिवार",
];
const HINDI_MONTHS = [
  "जनवरी",
  "फ़रवरी",
  "मार्च",
  "अप्रैल",
  "मई",
  "जून",
  "जुलाई",
  "अगस्त",
  "सितंबर",
  "अक्टूबर",
  "नवंबर",
  "दिसंबर",
];

function getFormattedDate(locale: string) {
  const now = new Date();
  if (locale === "hi") {
    return `${HINDI_DAYS[now.getDay()]}, ${now.getDate()} ${HINDI_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  }
  return now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function DateBar() {
  const { locale, t } = useLanguage();

  return (
    <div className="bg-np-blue-dark text-white/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-8 text-[11px] font-medium">
        <span>{getFormattedDate(locale)}</span>
        <span className="hidden sm:block tracking-wide">
          {t.dateBar.tagline}
        </span>
      </div>
    </div>
  );
}
