import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const outOfStock = product.stock === 0;

  return (
    <div className="card">
<img src={product.image} alt={product.name} className="product-img" />

<h3>{product.name}</h3>

      <p>${product.price}</p>
      <p>{product.category}</p>
      <p>{outOfStock ? "Out of Stock" : "In Stock"}</p>

      <button disabled={outOfStock} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
