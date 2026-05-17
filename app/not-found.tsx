import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-accent text-2xl font-bold">DC</span>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-primary font-bold px-8 py-4 hover:bg-accent-light transition-all uppercase tracking-wide text-sm rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
