import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { API } from "../../utils/constants";

interface Product {
  name: string;
  description: string;
  price: number;
}

const AddProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    price: 0,
  });
  
  const queryClient = useQueryClient();

  const addProduct = useMutation(
    (newProduct: Product) =>
      fetch(API + "/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addProduct.mutateAsync(product);
    setProduct({ name: "", description: "", price: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};
export default AddProductForm;
