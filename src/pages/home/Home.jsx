import React from "react";
import { useGetAllProductsQuery } from "../../apiSlice/apiSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../store/slice/wishlistSlice";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData);

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
                <button onClick={() => dispatch(like(el))}>
                  {wishlistData.some((item) => item.id === el.id) ? (
                    <FaHeart color="crimson" />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
