import React, { useState, useEffect } from "react"
import { useToken } from "./token"
import NavDropdown from 'react-bootstrap/NavDropdown';

function LogoutButton(){
    const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.

function user_visibility() {
        if (token !== null)
        {
          return (
            <>
            <NavDropdown.Item onClick={() => clogout()}>
              Sign Out
              </NavDropdown.Item>
            <NavDropdown.Item href='/my-profile'>My Profile</NavDropdown.Item>
            </>
          ) }
        else {
          return (
            <>
            <NavDropdown.Item href='/Login'>Login</NavDropdown.Item>
              <NavDropdown.Item href='/SignupPage'>Signup</NavDropdown.Item>
              </>
          )
        }
        }

    async function clogout()
  {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/logout/`;
    const response = await fetch(url, {
      method: "delete",
      credentials: "include",
    });
    if (response.ok) {
      // For Django services, use this one
      try {
          logout()
      } catch (e) {
        console.log('error')
      }
    }
    else{
      let error = await response.json();
      console.log("hello")
    }
    // DO SOMETHING WITH THE ERROR, IF YOU WANT
  }
return user_visibility()
}

export default LogoutButton
