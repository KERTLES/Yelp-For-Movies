import React, { useState } from 'react';
import { useToken } from "./token";
import { useNavigate } from "react-router-dom";
function Login(){
  // eslint-disable-next-line
  const [token, login] = useToken();
  // const [login] = useToken();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [is_active, setIsActive] = useState(false)
  const [success, setSuccess] = useState('')
  // const [accounts, setAccounts] = useState([])
  const navigate = useNavigate();

async function clogin(username, password) {
  // For Django account services, use this one
  const url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/login/`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    mode: "cors",
    body: form,
  });
  if (response.ok) {
    // For Django services, use this one
    login(username, password)
    const tokenUrl = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/tokens/mine/`;

    try {
      const response = await fetch(tokenUrl, {
        credentials: "include",
        mode: "cors",
      });
      if (response.ok) {
        // const data = await response.json();
        // const token = data.token;
        setUsername('')
        setPassword('')
        setSuccess(true)
        setIsActive(false)
        navigate("/")
      }
    } catch (e) {}
    return false;
  }
  else{
    setUsername('')
    setPassword('')
    setSuccess(false)
    // let error = await response.json();
  }
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}
function confirmedPassword()
{
    if(password !== "")
    {
        return (     
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button className="btn btn-primary btn-lg">Sign In</button>
      </div>)
    }
}

// useEffect(() => {
// async function getAccounts(){
//   const Url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/`;
//   const autoResponse = await fetch(Url)

//   if(autoResponse.ok)
//   {
//       const autoData = await autoResponse.json()
//       setAccounts(autoData.accounts)
//   }

// }
// getAccounts();
// }, [])

function handleSubmit(event)
 {
    event.preventDefault();
    clogin(username, password)
  };

    let successful
    let failure

    if(success === true)
    {
        successful = "alert alert-success mb-0"
    }
    else{
        successful = "alert alert-success d-none mb-0"
    }
    if(success === false)
    {
        failure = "alert alert-danger mb-0"
    }
   else{
        failure = "alert alert-danger d-none mb-0"
    } 

  return(
  <section className="vh-100" >
  <div title="login" className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={e => handleSubmit(e)} className="mx-1 mx-md-4">
          
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={e => setUsername(e.target.value)} value={username} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  
                {confirmedPassword()}

                </form>
                <div className={successful} id="success-message">
                    Successfully Logged In Account
                    </div>
              <div className={failure} id="failure-message">
                    Failed to Log In Account
                </div>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <a href={`${process.env.PUBLIC_URL}/`}>
                  <img src={`${process.env.PUBLIC_URL}/yooviesblack.png`} className="img-fluid" alt="logo" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>       

    )}
  export default Login