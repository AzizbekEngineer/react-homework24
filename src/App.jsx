import React, { Fragment } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/create/CreateProduct";
import ManageProduct from "./pages/admin/manage/ManageProduct";
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <Home />
    </Fragment>
  );
};

export default App;
