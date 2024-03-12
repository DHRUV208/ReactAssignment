import { useQuery } from "react-query";
import { API } from "../../utils/constants";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


interface Product {
  id: number; 
  name: string;
  description: string;
  price: number;
}

const ProductList = () => {
  const { data, isLoading, error } = useQuery("products", () =>
    fetch(API).then((res) => res.json())
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.map((product: { id: Key; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; price: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal; }) => {
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
