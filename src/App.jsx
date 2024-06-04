import React, { Fragment } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create/CreateProduct";
import ManageProduct from "./pages/admin/manage/ManageProduct";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Fragment>
  );
};

export default App;
