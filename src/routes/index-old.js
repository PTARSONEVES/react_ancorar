import React from "react";
import { Routes, Route } from 'react-router-dom';

import MyRoute from "./MyRoute";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <Routes>
      <MyRoute path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}
