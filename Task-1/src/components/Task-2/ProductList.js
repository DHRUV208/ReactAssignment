import { useQuery } from "react-query";
import { API } from "../../utils/constants";

const ProductList = () => {
  const { data, isLoading, error } = useQuery("products", () =>
    fetch(API).then((res) => res.json())
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.map((product) => {
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
