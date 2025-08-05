import Item from "./Item";

export default function PackingList({ items }) {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Shirts", quantity: 2, packed: false },
    { id: 4, description: "Pants", quantity: 2, packed: true },
  ];

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
