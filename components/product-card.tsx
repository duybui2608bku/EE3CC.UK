import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types";
import { CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasSalePrice = product["Sale price"] && product["Sale price"] < product["Regular price"];
  const price = product["Sale price"] || product["Regular price"];
  const inStock = product["In stock?"] === 1;

  return (
    <Link
      href={`/product/${product.ID}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {product.Images ? (
          <Image
            src={product.Images}
            alt={product.Name || "Product image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <span>No Image</span>
          </div>
        )}
        
        {/* Stock Badge */}
        {inStock && (
          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-green-500/90 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <CheckCircle2 className="h-3 w-3" />
            <span>In Stock</span>
          </div>
        )}

        {/* Sale Badge */}
        {hasSalePrice && (
          <div className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            Sale
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 line-clamp-2 text-base font-semibold text-card-foreground group-hover:text-primary transition-colors">
          {product.Name}
        </h3>
        
        {/* Category */}
        {product.Categories && (
          <p className="mb-2 text-xs text-muted-foreground">
            {product.Categories.split(",")[0].trim()}
          </p>
        )}

        {/* Price */}
        <div className="mt-auto flex items-baseline gap-2">
          {hasSalePrice && (
            <span className="text-sm font-medium text-muted-foreground line-through">
              €{product["Regular price"]}
            </span>
          )}
          <span className="text-lg font-bold text-foreground">
            €{price}
          </span>
        </div>
      </div>
    </Link>
  );
}
