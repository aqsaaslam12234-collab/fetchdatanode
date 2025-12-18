import { useState } from "react";
import type { ProductFormType } from "../types/ProductFormType";

interface AddProductFormProps {
  onAddProduct: (product: ProductFormType) => void;
}

const AddProductForm = ({ onAddProduct }: AddProductFormProps) => {
  const { register, handleSubmit } = useForm<ProductFormType>();
  const [rating, setRating] = useState<number>(0);

  const onSubmit = (data: ProductFormType) => {
    const product = { ...data, rating };
    onAddProduct(product);
  };

  return (
    <div className="max-w-2xl mx-auto p-2">
      <h1 className="text-2xl font-bold text-center mb-2">Add new Products</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-white p-2 rounded-2xl shadow"
      >
        <div>
          <label className="block font-medium mb-1 text-left" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Enter Product Name "
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block font-medium mb-1 text-left"
          >
            Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            className="w-full border rounded-lg p-2"
            placeholder="200000"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block font-medium mb-1 text-left"
          >
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id=""
            className="w-full border rounded-lg p-2"
          >
            <option>Accessories</option>
            <option>Fitness</option>
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="block font-medium text-left mb-1"
          >
            Quantity
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${
                  rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-x1 text-lg font-semibold"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
