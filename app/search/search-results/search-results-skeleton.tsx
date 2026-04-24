export function SearchResultsSkeleton() {
  return (
    <section className="flex flex-col items-center px-8 pb-20 pt-9 bg-white">
      <div className="w-full max-w-7xl general-padding-x">
        <span className="text-[13px] text-[#666666] block mb-6">
          Searching...
        </span>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-[10px] border border-[#e5e5e5] bg-white"
            >
              <div className="aspect-video w-full animate-pulse bg-[#f0f0f0]" />
              <div className="space-y-3 px-5 pb-5 pt-[18px]">
                <div className="h-3 w-2/3 animate-pulse rounded bg-[#e5e5e5]" />
                <div className="h-4 w-full animate-pulse rounded bg-[#e5e5e5]" />
                <div className="h-3 w-full animate-pulse rounded bg-[#e5e5e5]" />
                <div className="h-3 w-4/5 animate-pulse rounded bg-[#e5e5e5]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
