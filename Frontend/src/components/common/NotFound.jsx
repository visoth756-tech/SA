export function NotFound() {
  return (
    <>
      <div className="flex min-h-screen bg-body font-Inter">
        <div className="flex-1 flex-col items-center justify-center h-screen gap-2">
          <h1 className="text-3xl font-bold text-red-500">404 - Page not found</h1>
          <p className="text-red-500">The page you are looking for does not exist.</p>
        </div>
      </div>
    </>
  );
}