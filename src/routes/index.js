import React from "react";
import { Routes, Route } from 'react-router-dom';

import MyRoute from "./MyRoute";
import Home from "../pages/Home";
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import User from "../pages/User";
import Users from "../pages/Users";
import Register from "../pages/Register";
import Fotos from "../pages/Fotos";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<MyRoute/>}>
        <Route path='/users/:id' element={<User/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/fotos' element={<Fotos/>} />
      </Route>
      <Route path='/register' element={<Register/>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404/>} />
    </Routes>
  );
}

