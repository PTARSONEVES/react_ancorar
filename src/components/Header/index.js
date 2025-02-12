import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import * as colors from '../../config/colors';
import * as actions from '../../store/modules/auth/actions';
import { Nav } from "./styled";

export default function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      {isLoggedIn ? (
      <Link onClick={handleLogout} to="/Login">
        <FaPowerOff size={24} />
      </Link>)
      :(
      <Link to="/Login">
        <FaUserAlt size={24} />
      </Link>
      )}
      <Link to="/Users">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/Register">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/outro">
        <FaSignInAlt size={24} />
      </Link>

    {isLoggedIn ? (<FaCircle size={24} color={colors.dark.loggedIn} />) : (<FaCircle size={24} color={colors.dark.loggedOut} />)}

    </Nav>
  );
}
