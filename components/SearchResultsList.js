import ProductCard from "./ProductCard";

function SearchResultList({ items }) {
    return <ul>
      {items.map(item => (
        <li key={item.id}>
          <ProductCard item={item} />
        </li>
      ))}
    </ul>;
  }

export default SearchResultList;