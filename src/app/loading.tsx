export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-lg bg-np-yellow animate-pulse flex items-center justify-center">
          <span className="font-display text-sm font-black text-np-blue-dark">NP</span>
        </div>
        <div className="h-1 w-32 rounded-full bg-np-gray-200 overflow-hidden">
          <div className="h-full w-1/2 rounded-full bg-np-blue animate-[loading_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
