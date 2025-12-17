import { useState } from "react"

const AddProductForm = () => {
    const [rating, setRating] = useState<number>(0);

  return (
    <div>
      <h1>Add new Products</h1>
      <form>
        <div>
            <label htmlFor="name">Name</label>
                <input type="text" />
            
        </div>

        <div>
            <label htmlFor="category">Price</label>
            <input type="number" />
        </div>

        <div>
            <label htmlFor="category">Category</label>
            <select id="">
                <option>Accessories</option>
                <option>Fitness</option>
                <option>Clothing</option>
                <option>Electronics</option>
                <option>Other</option>
            </select>
        </div>

        <div>
            <label htmlFor="quantity">Quantity</label>
            {/* <div>{[1,2,3,4,5].map((star)=> (
                <Star 
                key={star}
                size={20}
                onClick={() => setRating(star)}
                className={`cursor-pointer ${rating >= star
                    ?"fill-yellow-400 text-yellow-400"
                    : "text-gray-400"
                }`}
                
                />
            ))}</div> */}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProductForm
