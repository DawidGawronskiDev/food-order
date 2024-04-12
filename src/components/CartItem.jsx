export default function CartItem({ item }) {
  const { name, quantity, price } = item;

  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x ${price}
      </p>
      <p className="cart-item-actions">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </p>
    </li>
  );
}
