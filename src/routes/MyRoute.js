import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function  MyRoute() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    isLoggedIn.token ? <Outlet/> : <Navigate to='/login'/>
  );
}
