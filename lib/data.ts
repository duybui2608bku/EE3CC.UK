import { Product, Category } from "./types";
import data from "@/app/data/data.json";


export function getAllProducts(): Product[] {
  return (data as Product[]).filter(
    (product) =>
      product.Type === "simple" &&
      product.Published === 1 &&
      product["Visibility in catalog"] === "visible" &&
      product.Name &&
      product.Images &&
      product.Categories
  );
}

export function getFeaturedProducts(): Product[] {
  const featured = getAllProducts()
    .filter((product) => product["Is featured?"] === 1)
    .slice(0, 8);

  if (featured.length === 0) {
    return getAllProducts().slice(0, 8);
  }
  
  return featured;
}

export function getAllCategories(): Category[] {
  const products = getAllProducts();
  const categoryMap = new Map<string, number>();

  products.forEach((product) => {
    if (!product.Categories) return;
    const categories = product.Categories.split(",").map((c) => c.trim());
    categories.forEach((category) => {
      if (category && category !== "Uncategorized" && category !== "More") {
        const count = categoryMap.get(category) || 0;
        categoryMap.set(category, count + 1);
      }
    });
  });

  return Array.from(categoryMap.entries())
    .map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const products = getAllProducts();
  
  const normalizedSlug = categorySlug.toLowerCase().replace(/-/g, " ");
  
  return products.filter((product) => {
    if (!product.Categories) return false;
    const categories = product.Categories.split(",").map((c) => c.trim());
    return categories.some((cat) => {
      const normalizedCat = cat.toLowerCase().replace(/\s+/g, " ");
      const catSlug = cat.toLowerCase().replace(/\s+/g, "-");
      return (
        catSlug === categorySlug ||
        normalizedCat === normalizedSlug
      );
    });
  });
}

export function getProductById(id: number): Product | undefined {
  return getAllProducts().find((product) => product.ID === id);
}

export function searchProducts(query: string): Product[] {
  const products = getAllProducts();
  const lowerQuery = query.toLowerCase();

  return products.filter(
    (product) => product.Name?.toLowerCase().includes(lowerQuery)
  );
}

export function categoryNameToSlug(categoryName: string | undefined): string {
  if (!categoryName) return "";
  return categoryName.toLowerCase().replace(/\s+/g, "-");
}

export function getRelatedProducts(productId: number, limit: number = 4): Product[] {
  const currentProduct = getProductById(productId);
  if (!currentProduct || !currentProduct.Categories) return [];
  
  const category = currentProduct.Categories.split(",")[0].trim();
  return getAllProducts()
    .filter(
      (product) =>
        product.ID !== productId &&
        product.Categories?.includes(category)
    )
    .slice(0, limit);
}