import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductGrid } from "@/components/product-grid";
import { getProductsByCategory, getAllCategories } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const products = getProductsByCategory(slug);
  const categories = getAllCategories();
  const currentCategory = categories.find((cat) => cat.slug === slug);

  if (!currentCategory) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Category Header */}
        <section className="border-b bg-muted/50 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {currentCategory.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Found {products.length} products in this category
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid products={products} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
