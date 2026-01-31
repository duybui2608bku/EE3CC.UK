import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-md text-center px-4">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
