import React,{useState, useEffect} from 'react';
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
    if(this.state.password === this.state.password2 && this.state.password != "")
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
            if(this.state.user_name == data.user_name)
            {
                this.setState({failureu: true, user_name: ''})
            }
            if(this.state.password == data.password)
            {
                this.setState({failurep: true, password: ''})
            }
            if(this.state.email == data.email)
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
render() {

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
  <section className="vh-100 bg-image" >
    style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style="border-radius: 15px;">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Sign Up</h2>

                <form onSubmit={this.handleSubmit}>

                  <div className="form-outline mb-4">
                    <input onChange={this.handleFirst} value={this.state.first_name} type="text" id="firstname" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="firstname">Your Name</label>
                  </div>

                  <div className="form-outline mb-4"
                    <input onChange="email" id="form3Example3cg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input onChange="password" id="form3Example4cg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input onChange="password" id="form3Example4cdg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" onChange="checkbox" value="" id="form2Example3cg" />
                    <label className="form-check-label" htmlFor="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center">
                    <button onChange="button"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                      className="fw-bold text-body"><u>Login here</u></a></p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )}
}
