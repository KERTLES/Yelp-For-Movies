import React from 'react';
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      user_name: '',
      password: '',
      is_active: false,
      success: '',
      failure: false,
      accounts: [],
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleIsActive = this.handleIsActive.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
confirmedPassword()
{
    if(this.state.password !== "" && this.state.is_active == true)
    {
        return (     
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button className="btn btn-primary btn-lg">Sign In</button>
      </div>)
    }
}

async checker()
{
    let found = false
    for(let a of this.state.accounts)
    {
        const IndAccountUrl = `http://localhost:8080/api/accounts/${a.id}`
        const fetchSoldConfig = {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
            },
            };
            const newResponse = await fetch(IndAccountUrl, fetchSoldConfig);
            const data = await newResponse.json()
            if(this.state.user_name === data.user_name && this.state.email === data.email && this.state.password === data.password)
            {
                this.setState({failure: true, user_name: ''})
                found = true
            }
    }
}

handleEmail(event){
  const value = event.target.value
  this.setState({email: value})
}
handleUserName(event){
  const value = event.target.value
  this.setState({user_name: value})
}
handlePassword(event){
  const value = event.target.value
  this.setState({password: value})
}
handleIsActive(event){
  const value = event.target.checked
  this.setState({is_active: value})
}
async componentDidMount(){
  const Url = 'http://localhost:8080/api/accounts/'
  const autoResponse = await fetch(Url)

  if(autoResponse.ok)
  {
      const autoData = await autoResponse.json()
      this.setState({accounts: autoData.accounts})
  }

}

handleSubmit(event)
 {
    event.preventDefault();
    const data = {...this.state};
    delete data.accounts;
    delete data.failure
    delete data.success
  
//const data = Object.fromEntries(new FormData(form))
    const fetchOptions = {
      method: 'post',
      body: new FormData(data),
      credentials: 'include',
       // headers: {
//'Content-Type': 'application/json',
       // }
      };
    const url = 'http://localhost:8080/accounts/';
    const response = await fetch(url, fetchOptions);
    if (response.ok) {
      window.location.href = '/';
    } else {
      console.error(response);
    }
    };
  

  render(){

    let successful
    let failure
    let failureee
    let failureuu

    if(this.state.success === true)
    {
        successful = "alert alert-success mb-0"
    }
    else{
        successful = "alert alert-success d-none mb-0"
    }
    if(this.state.success === false)
    {
        failure = "alert alert-danger mb-0"
    }
   else{
        failure = "alert alert-danger d-none mb-0"
    } 
    if (this.state.failuree === true)
    {
        failureee = "alert alert-danger mb-0"
    }
    else{
        failureee = "alert alert-danger d-none mb-0"
    }
    if (this.state.failureu === true)
    {
        failureuu = "alert alert-danger mb-0"
    }
    else{
        failureuu = "alert alert-danger d-none mb-0"
    }

    return(
  <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form onSubmit={this.handleSubmit} className="mx-1 mx-md-4">
                
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleFirst} value={this.state.first_name} type="text" id="firstname" className="form-control" />
                      <label className="form-label" htmlFor="firstname">Your First name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleLast} value={this.state.last_name} type="text" id="lastname" className="form-control" />
                      <label className="form-label" htmlFor="lastname">Your Last name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleUserName} value={this.state.user_name} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                      <div className={failureuu} id="failure-message">
                      Username doesn't match. Please insert a new Username
                    </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleEmail} value={this.state.email}type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <div className={failureee} id="failure-message">
                      Email doesn't match. Please insert a new Email.
                        </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handlePassword} value={this.state.password} type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input onChange={this.handleIsActive} value={this.state.is_active} className="form-check-input me-2" type="checkbox" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                {this.confirmedPassword()}

                </form>
                <div className={successful} id="success-message">
                    Successfully Logged In Account
                    </div>
              <div className={failure} id="failure-message">
                    Failed to Log In Account
                </div>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>       

    )}
  }
  export default Login