import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-16 w-16 rounded-full border-2 border-np-gray-200 border-t-np-yellow animate-spin-slow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="News Pinch"
              width={32}
              height={31}
              className="h-8 w-auto"
            />
          </div>
        </div>
        <div className="text-center">
          <p className="font-display text-sm font-semibold text-np-gray-700">Loading</p>
          <div className="flex gap-1 justify-center mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-np-blue animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-np-blue animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-np-blue animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    </div>
  );
}
