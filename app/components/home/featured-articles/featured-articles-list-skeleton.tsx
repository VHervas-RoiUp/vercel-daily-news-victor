export function FeaturedArticlesListSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="flex flex-col animate-pulse">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 border border-gray-200 p-2">
            <div className="h-full w-full bg-gray-200 rounded-lg"></div>
          </div>
          <div className="h-4 w-full bg-gray-200 rounded-lg mt-4"></div>
          <div className="h-4 w-full bg-gray-200 rounded-lg mt-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded-lg mt-2"></div>
        </div>
      ))}
    </div>
  );
}
