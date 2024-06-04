import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin-header/AdminHeader";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <Sidebar />
        <div>
          <AdminHeader setClose={setClose} />
          <Outlet />
        </div>
        {/* <Route path="/admin" element={<Admin />}>
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="manageProduct" element={<ManageProduct />} />
        </Route> */}
      </div>
    </>
  );
};

export default Admin;
