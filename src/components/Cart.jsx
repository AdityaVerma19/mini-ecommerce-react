import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, totalItems, totalPrice, removeFromCart, updateQty } = useCart();
  const items = Object.values(cart);

  return (
    <div className="cart">
      <h3>Cart</h3>

      {items.length === 0 && <p>Empty cart</p>}

      {items.map(item => (
     <div key={item.id} className="cart-item">
          <strong>{item.name}</strong>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.qty}
            min="1"
            max={item.stock}
            onChange={e => updateQty(item.id, Number(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <hr />
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}
