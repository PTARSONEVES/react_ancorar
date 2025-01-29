import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function  MyRoute() {
  let isLoggedIn = { 'token': true}

  return (
    isLoggedIn.token ? <Outlet/> : <Navigate to='/login'/>
  );
}
