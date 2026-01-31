import { Product, Category } from "./types";
import data from "@/app/data/data.json";

// 获取所有产品
export function getAllProducts(): Product[] {
  return (data as Product[]).filter(
    (product) =>
      product.Type === "simple" &&
      product.Published === 1 &&
      product["Visibility in catalog"] === "visible" &&
      product.Name &&
      product.Images &&
      product.Categories // 确保有分类字段
  );
}

// 获取特色产品
export function getFeaturedProducts(): Product[] {
  const featured = getAllProducts()
    .filter((product) => product["Is featured?"] === 1)
    .slice(0, 8);
  
  // 如果没有特色产品，返回最新的8个产品
  if (featured.length === 0) {
    return getAllProducts().slice(0, 8);
  }
  
  return featured;
}

// 获取所有分类
export function getAllCategories(): Category[] {
  const products = getAllProducts();
  const categoryMap = new Map<string, number>();

  products.forEach((product) => {
    if (!product.Categories) return; // 跳过没有分类的产品
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

// 根据分类获取产品
export function getProductsByCategory(categorySlug: string): Product[] {
  const products = getAllProducts();
  
  // 将 slug 转换为可能的分类名称格式
  const normalizedSlug = categorySlug.toLowerCase().replace(/-/g, " ");
  
  return products.filter((product) => {
    if (!product.Categories) return false; // 跳过没有分类的产品
    const categories = product.Categories.split(",").map((c) => c.trim());
    return categories.some((cat) => {
      const normalizedCat = cat.toLowerCase().replace(/\s+/g, " ");
      const catSlug = cat.toLowerCase().replace(/\s+/g, "-");
      return (
        catSlug === categorySlug ||
        normalizedCat === normalizedSlug ||
        normalizedCat.includes(normalizedSlug) ||
        normalizedSlug.includes(normalizedCat)
      );
    });
  });
}

// 根据ID获取产品
export function getProductById(id: number): Product | undefined {
  return getAllProducts().find((product) => product.ID === id);
}

// 搜索产品（仅搜索产品名称）
export function searchProducts(query: string): Product[] {
  const products = getAllProducts();
  const lowerQuery = query.toLowerCase();

  return products.filter(
    (product) => product.Name?.toLowerCase().includes(lowerQuery)
  );
}

// 将分类名称转换为 slug
export function categoryNameToSlug(categoryName: string | undefined): string {
  if (!categoryName) return "";
  return categoryName.toLowerCase().replace(/\s+/g, "-");
}

// 获取相关产品（同分类的其他产品）
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