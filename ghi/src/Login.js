import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      is_active: false,
      success: '',
      accounts: [],
    }
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleIsActive = this.handleIsActive.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
}

async logout(username, password)
{
  const url = `http://localhost:8080/api/logout/`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    body: form,
  });
  console.log(response)
  if (response.ok) {
    // For Django services, use this one

    try {
        const data = await response.json();
        console.log(data)
        const token = data.token;
        console.log(token)
        const cleared = {
          username: '',
          password: '',
          success: true,
          is_active: false,
        };
      this.setState(cleared);
    } catch (e) {}
  }
  else{
    const cleared = {
      username:'',
      password:'',
      success: false,
    };
    let error = await response.json();
    console.log(error)
    console.log("hello")
    this.setState(cleared);
  }
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}

async login(username, password) {
  // For Django account services, use this one
  const url = `http://localhost:8080/api/login/`;

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(url, {
    method: "post",
    credentials: "include",
    body: form,
  });
  console.log(response)
  if (response.ok) {
    // For Django services, use this one
    const tokenUrl = `http://localhost:8080/api/tokens/mine/`;

    try {
      const response = await fetch(tokenUrl, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        const token = data.token;
        console.log(token)
        const cleared = {
          username: '',
          password: '',
          success: true,
          is_active: false,
        };
      this.setState(cleared);
      }
    } catch (e) {}
    return false;
  }
  else{
    const cleared = {
      username:'',
      password:'',
      success: false,
    };
    let error = await response.json();
    console.log(error)
    console.log("hello")
    this.setState(cleared);
  }
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}
confirmedPassword()
{
    if(this.state.password !== "" && this.state.is_active === true)
    {
        return (     
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button className="btn btn-primary btn-lg">Sign In</button>
      </div>)
    }
}

handleUserName(event){
  const value = event.target.value
  this.setState({username: value})
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
    this.login(data.username, data.password)
    };

  render(){

    let successful
    let failure

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

    return(
  <section className="vh-100" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form onSubmit={this.handleSubmit} className="mx-1 mx-md-4">
          
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleUserName} value={this.state.username} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
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
              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button onClick={() => this.logout(this.state.username, this.state.password)} className="btn btn-primary btn-lg">Sign Out</button>
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