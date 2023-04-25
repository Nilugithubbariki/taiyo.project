import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../coponents/home/contact/Contact";
import Chart from "../coponents/home/chart/Chart";
import Menu from "./Menu";
import Form from "../form/Form";
const Router = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Router;
