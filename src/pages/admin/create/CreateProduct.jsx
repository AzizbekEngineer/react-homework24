import React, { useState } from "react";
import "./createProduct.scss";
import { toast } from "react-toastify";
import "./createProduct.scss";
import axios from "axios";

let initialState = {
  title: "",
  price: "",
  category: "",
};

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newProduct);

    axios
      .post("/products", newProduct)
      .then((res) => {
        setNewProduct(initialState);
        toast.success("Qo'shildi");
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="form">
      <h2 className="form__title">CreateProduct</h2>
      <form className="form__info" onSubmit={handleCreate} action="">
        <div className="form__card">
          <label htmlFor="name">Product Title:</label>
          <input
            id="name"
            value={newProduct.title}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="form__card">
          <label htmlFor="price">Product Price:</label>
          <input
            id="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, price: +e.target.value }))
            }
            type="number"
            placeholder="price"
          />
        </div>
        <div className="form__card">
          <label htmlFor="desc">Product Category:</label>
          <input
            id="desc"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct((prev) => ({ ...prev, category: e.target.value }))
            }
            type="text"
            placeholder="Category"
          />
        </div>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
