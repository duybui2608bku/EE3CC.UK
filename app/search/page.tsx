import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { searchProducts } from "@/lib/data";
import { Search } from "lucide-react";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || "";
  const products = query ? searchProducts(query) : [];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="mb-4 flex justify-center">
                <Search className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {query ? `Search Results for "${query}"` : "Search Products"}
              </h1>
              {query && (
                <p className="mt-4 text-lg text-muted-foreground">
                  Found {products.length} {products.length === 1 ? "product" : "products"}
                </p>
              )}
              {!query && (
                <p className="mt-4 text-lg text-muted-foreground">
                  Enter a search term to find products
                </p>
              )}
            </div>
            
            {query ? (
              products.length > 0 ? (
                <ProductGrid products={products} />
              ) : (
                <div className="py-12 text-center">
                  <p className="text-lg text-muted-foreground mb-4">
                    No products found matching "{query}"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try searching with different keywords
                  </p>
                </div>
              )
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">
                  Please enter a search term in the search bar above
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
