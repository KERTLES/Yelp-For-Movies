import React, { useState, useEffect } from "react"
import { useToken } from "./token"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

function LogoutButton(){
    const [token, login, logout] = useToken(); // for some reason, login has to be included here, even if it is never used.
    const [auth, setAuth] = useState([]);
    const navigate = useNavigate();
   useEffect(() => {
    async function authen(){
      if(token !== null)
      {
    const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/check/`;
    const request = await fetch(tokenUrl, { 
      method: "delete", 
      credentials: "include" })
      if(request.ok)
      {
      const toDa = await request.json()
      setAuth(toDa['authenticated'])
      }
      else
      {
        setAuth(false)
      }
    }
    else{
      setAuth(false)
    }
    }authen();
  },[]
)
function user_visibility() {

        if (auth)
        {
          return (
            <>
            <NavDropdown.Item onClick={() => clogout()}>
              Sign Out
              </NavDropdown.Item>
            <NavDropdown.Item href='myprofile'>My Profile</NavDropdown.Item>
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
          navigate('/')
          setAuth(false)
      } catch (e) {
        console.log('error')
      }
    }
    else{
      console.log("hello")
    }
    // DO SOMETHING WITH THE ERROR, IF YOU WANT
  }
return user_visibility()
}

export default LogoutButton