import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { API } from "../../utils/constants";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const queryClient = useQueryClient();

  const addProduct = useMutation(
    (newProduct) =>
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addProduct.mutateAsync({ name, description, price });
    setName("");
    setDescription("");
    setPrice("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};
export default AddProductForm;
