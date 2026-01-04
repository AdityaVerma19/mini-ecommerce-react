import { memo } from "react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  if (products.length === 0) return <p>No products found</p>;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default memo(ProductGrid);
