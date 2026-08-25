export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-divider"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}
