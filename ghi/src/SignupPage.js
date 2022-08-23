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
      is_active: '',
      accounts: [],
    }
  this.handleFirst = this.handleFirst.bind(this)
  this.handleLast = this.handleLast.bind(this)
  this.handleEmail = this.handleEmail.bind(this)
  this.handleUserName = this.handleUserName.bind(this)
  this.handlePassword = this.handlePassword.bind(this)
  this.handleIsActive = this.handleIsActive.bind(this)
  }
  async handleSubmit(event){
    event.preventDefault();
    const data = {...this.state};
    delete data.accounts;

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
                is_active: '',
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
handleFirst(event){
    const value = event.target.value
    this.setState({first_name: value})
}
handleLast(event){
    const value = event.target.value
    this.setState({last_name: value})
}
handleIsActive(event){
    const value = event.target.value
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
                      <input onChange={this.handleFirst} value={this.state.first_name} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your First name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleLast} value={this.state.last_name} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Last name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleUserName} value={this.state.user_name} type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Your Username</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handleEmail} value={this.state.email}type="email" id="form3Example3c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handlePassword} value={this.state.password} type="password" id="form3Example4c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input onChange={this.handlePassword} value={this.state.password} type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input onChange={this.handleIsActive} value={this.state.is_active}className="form-check-input me-2" type="checkbox" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

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
