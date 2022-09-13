import React, { useState, useEffect } from "react"
import { useToken } from "./token"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  // eslint-disable-next-line
  const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.
  const [auth, setAuth] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function authen() {
      if (token !== null) {
        const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/tokens/mine`;
        const request = await fetch(tokenUrl, {
          method: "get",
          credentials: "include",
          mode: "cors",
        })
        if (request.ok) {
          const toDa = await request.json()
          if (toDa['token'] === token) {
            setAuth(true)
          }
          else {
            setAuth(false)
          }
        }
        else {
          setAuth(false)
        }
      }
      else {
        setAuth(false)
      }
    } authen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []
  )
  function user_visibility() {

    if (auth) {
      return (
        <>
          <NavDropdown.Item onClick={() => clogout()}>
            Sign Out
          </NavDropdown.Item>
          <NavDropdown.Item href={`${process.env.PUBLIC_URL}/myprofile`}>My Profile</NavDropdown.Item>
        </>
      )
    }
    else {
      return (
        <>
          <NavDropdown.Item href={`${process.env.PUBLIC_URL}/Login`}>Login</NavDropdown.Item>
          <NavDropdown.Item href={`${process.env.PUBLIC_URL}/SignupPage`}>Signup</NavDropdown.Item>
        </>
      )
    }
  }

  async function clogout() {
    const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/logout/`;
    const response = await fetch(url, {
      method: "delete",
      credentials: "include",
      mode: "cors",
    });
    if (response.ok) {
      try {
        logout()
        navigate("/")
        setAuth(false)
      } catch (e) {
        console.log('error')
      }
    }
    else {
      console.log("hello")
    }
  }
  return user_visibility()
}

export default LogoutButton
