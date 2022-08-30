import React, { useEffect, useState} from 'react';
import { AuthContext, useToken } from './token';

function UserProfile(){
  const [accounts, setAccount] = useState([])

    useEffect(() => {
        async function getAccount(){
          const Url = `${process.env.REACT_APP_ACCOUNTS_HOST}/api/accounts/`;
          const autoResponse = await fetch(Url)
        
          if(autoResponse.ok)
          {
              const autoData = await autoResponse.json()
              setAccount(autoData.accounts)
          }
        
        }
        getAccount();
    }, [])

    return(
        <section className="vh-100" >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Profile</p>
      
                      <form className="mx-1 mx-md-4">
                
                        {/* <div className="d-flex flex-row align-items-center mb-4">
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
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input onChange={e => setIsActive(e.target.checked)} value={is_active} className="form-check-input me-2" type="checkbox" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
                      {confirmedPassword()} */}
      
                      </form>
                      {/* <div className={successful} id="success-message">
                          Successfully Logged In Account
                          </div>
                    <div className={failure} id="failure-message">
                          Failed to Log In Account
                      </div> */}
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
      
                    </div>
                    {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button onClick={() => clogout()} className="btn btn-primary btn-lg">Sign Out</button>
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>       
      
          )
}

export default UserProfile