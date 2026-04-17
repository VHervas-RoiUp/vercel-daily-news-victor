export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white absolute bottom-0 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Vercel Daily News. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
