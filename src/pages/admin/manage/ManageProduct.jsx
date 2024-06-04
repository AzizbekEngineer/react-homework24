import React from "react";
import { useGetAllProductsQuery } from "../../../apiSlice/apiSlice";
import { FaRegHeart } from "react-icons/fa";

const ManageProduct = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className=" product container">
      <div className="product__cards">
        {data?.map((el) => (
          <div className="product__card" key={el?.id}>
            <div className="product__img">
              <img src={el?.img} alt="" />
            </div>
            <div className="product__info">
              <h3>Price:{el?.price}$</h3>
              <p>Category:{el?.category}</p>
              <div className="product__buttons">
                <button>
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
