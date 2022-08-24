import React from 'react';
class SignupPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    first_name: '',
    last_name: '',
      email: '',
      user_name: '',
      password: '',
      password2:'',
      is_active: false,
      success: '',
      failuree: false,
      failurep: false,
      failureu: false,
      accounts: [],
    }
    this.handleFirst = this.handleFirst.bind(this)
    this.handleLast = this.handleLast.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleUserName = this.handleUserName.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePassword2 = this.handlePassword2.bind(this)
    this.handleIsActive = this.handleIsActive.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

confirmedPassword()
{
    if(this.state.password === this.state.password2 && this.state.password !== "")
    {
        return (     
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button className="btn btn-primary btn-lg">Register</button>
      </div>)
    }
}

async checker()
{
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
            if(this.state.user_name === data.user_name)
            {
                this.setState({failureu: true, user_name: ''})
            }
            if(this.state.password === data.password)
            {
                this.setState({failurep: true, password: ''})
            }
            if(this.state.email === data.email)
            {
                this.setState({failuree: true, email: ''})
            }
    }
}
  async handleSubmit(event){
    event.preventDefault();
    const data = {...this.state};
    delete data.accounts;
    delete data.failuree
    delete data.failurep
    delete data.failureu
    delete data.password2
    delete data.success
    const accountUrl = `http://localhost:8080/api/accounts/`;
    const fetchSoldConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const Response = await fetch(accountUrl, fetchSoldConfig);
        if (Response.ok) {
            console.log("got it")
            const cleared = {
                first_name: '',
                last_name: '',
                email: '',
                user_name: '',
                password: '',
                password2: '',
                success: true,
                failuree: false,
                failurep: false,
                failureu: false,
                is_active: false,
              };
            this.setState(cleared);
        }
        else{
            console.log("error")
            this.checker()
            const cleared = {
                password2: '',
                success: false,
              };
              this.setState(cleared);
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
handlePassword2(event){
    const value = event.target.value
    this.setState({password2: value})
}
handleFirst(event){
    const value = event.target.value
    this.setState({first_name: value})
}
handleLast(event){
    const value = event.target.value
    this.setState({last_name: value})
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
render(){

    let successful
    let failure
    let failureee
    let failurepp
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
    if (this.state.failurep === true)
    {
        failurepp = "alert alert-danger mb-0"
    }
    else{
        failurepp = "alert alert-danger d-none mb-0"
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
                      Username already used. Please insert a new Username
                    </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleEmail} value={this.state.email}type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      <div className={failureee} id="failure-message">
                      Email already used. Please insert a new Email.
                        </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handlePassword} value={this.state.password} type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <div className={failurepp} id="failure-message">
                      Password already used. Please insert a new Password
                    </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handlePassword2} value={this.state.password2} type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
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
                    Successfully Created Account
                    </div>
              <div className={failure} id="failure-message">
                    Failed Creating Account
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
export default SignupPage
