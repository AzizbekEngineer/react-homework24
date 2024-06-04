import React from "react";
import { useGetAllProductsQuery } from "../apiSlice/apiSlice";

const Home = () => {
  const { data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div className="container">
      <div className="product__cards">
        {data?.products?.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
