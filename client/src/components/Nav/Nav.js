import React from "react";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';
import "./Nav.css";
import jQuery from 'jquery'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '40%'
  }
};

export default class Nav extends React.Component {

  constructor() {
    super();

    this.state = {
      modal1IsOpen: false,
      modal2IsOpen: false,

      firstnameInput: "",
      lastnameInput: "",
      usernameInput: "",
      emailInput: "",
      passwordInput: "",

      usernameLogin: "",
      passwordLogin: "",

      user: null,
      loggedIn: false,

      usernameError: false,
      duplicateError: false,
      emailError: false,
      passwordError: false,
      ageError: false,

      loginError: false

    };

    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    //this._logout = this._logout.bind(this);
    //this._login = this._login.bind(this);

  }

  // componentDidMount() {

  // 	//--Optional, this checks to see if a user is logged in and if so...
  // 	//--it's set to show their name and hide the login and signup buttons.

  //   axios.get('/auth/user').then(response => {
  //     console.log(response)
  //     if (!!response.data.user) {
  //       console.log('A user is currently logged in')
  //       this.setState({
  //         loggedIn: true,
  //         user: response.data.user,
  //         hideAccount: false,
  //         hideLogout: false,
  //         hideLogin: true,
  //         hideSignup: true
  //       })
  //     } else {
  //       this.setState({
  //         loggedIn: false,
  //         user: null,
  //         hideAccount: true,
  //         hideLogout: true,
  //         hideLogin: false,
  //         hideSignup: false
  //       })
  //       console.log('No user is logged in. Set as Guest.')
  //     }
  //   })
  // }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignupSubmit(event) {
    event.preventDefault()

    axios
      .post('/auth/signup', {
        firstName: this.state.firstnameInput,
        lastName: this.state.lastnameInput,
        username: this.state.usernameInput,
        email: this.state.emailInput,
        password: this.state.passwordInput
      })
      .then(response => {
        if (!response.data.errmsg) {
          console.log('User added.')
          this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            modal2IsOpen: false
          })
        } else {
          console.log('Duplicate Username found.')
          this.setState({
            usernameError: false
          })
          return false;
        }
      })
  }

  handleLoginSubmit(event) {
    event.preventDefault()
    //this._login(this.state.usernameInput, this.state.passwordInput)
    let a = this.state.usernameInput;
    let b = this.state.passwordInput;

    axios.get('/auth/user').then(response => {
      let c = JSON.stringify(response.data)
      let d = c.split('"');
      let passwordIndex = d.indexOf(a) + 8
      let pwd = d[passwordIndex];

      if ((jQuery.inArray(a, d) !== -1) && pwd === b) {
        console.log("YES")
        sessionStorage.setItem("username" , JSON.stringify(a))
        this.setState({modal1IsOpen: false})
        window.location.replace("http://localhost:3000/movielist")
      }



    })

  }

  openModal1() {
    this.setState({ modal1IsOpen: true });
  }

  openModal2() {
    this.setState({ modal2IsOpen: true });
  }

  closeModal1() {
    this.setState({ modal1IsOpen: false });
  }

  closeModal2() {
    this.setState({ modal2IsOpen: false });
  }

  /*_logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {

      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
          hideLogin: false,
          hideSignup: false,
          hideAccount: true,
          hideLogout: true
        })
      }
    })
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user,
            hideAccount: false,
            hideLogout: false,
            hideLogin: true,
            hideSignup: true,
            modal1IsOpen: false,
            loginError: false,
            usernameLogin: "",
            passwordLogin: ""
          })
        }
      })
      .catch(error => {
        if (error.response.status) {
          this.setState({
            loginError: true
          })
        }
      })
  }*/

  render() {
    return (
      <nav className="bg-primary nav animated fadeIn delay-2s">
        <span className="navbar-brand" to="/">
          My<span className="nav-blue">Movie</span>List
    </span>
        <div>
          <ul className="navbar-nav right">
            <li
              className={
                window.location.pathname === "/"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/" className="nav-link">
                Home
          			</Link>
            </li>
            <li
              className={
                window.location.pathname === "/movielist"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/movielist" className="nav-link">
                Your List
          			</Link>
            </li>
            <li
              className={
                window.location.pathname === "/search"
                  ? "nav-item active"
                  : "nav-item"
              }
            >
              <Link to="/search" className="nav-link">
                <i className="material-icons nav-search">search</i>
              </Link>
            </li>
            <a className="waves-effect waves-light btn modal-trigger" id="signInButton" onClick={this.openModal1} >Sign In</a>
            <a className="waves-effect waves-light btn blue" id="signupButton" onClick={this.openModal2}>Sign Up</a>
          </ul>
        </div>

        {/*Log In Modal*/}
        <Modal
          isOpen={this.state.modal1IsOpen}
          onRequestClose={this.closeModal1}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Log In Modal"
        >
          <div className="modal-header">
            <button type="button" className="close btn-floating btn-small waves-effect waves-light red animated tada delay-2s" onClick={this.closeModal1}>x</button>
            <h3 className="modal-title">Login</h3>
          </div>

          <div className="modal-body">
            <form className="signup">

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="usernameInput"
                  placeholder="Username"
                  value={this.state.usernameInput}
                  onChange={this.handleChange}
                  required></input>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="passwordInput"
                  placeholder="Password"
                  maxLength="20"
                  value={this.state.passwordInput}
                  onChange={this.handleChange}
                  required></input>
              </div>

              <hr></hr>
              <button
                className="btn waves-effect waves-light blue pulse"
                type="submit"
                onClick={this.handleLoginSubmit}>
                Sign In <i class="material-icons right">send</i></button>
            </form>
          </div>
        </Modal>

        {/*Log In Modal*/}



        {/*Sign Up Modal*/}
        <Modal
          isOpen={this.state.modal2IsOpen}
          onRequestClose={this.closeModal2}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Sign Up Modal"
        >
          <div className="modal-header">
            <button type="button" className="close btn-floating btn-small waves-effect waves-light red animated tada delay-2s" onClick={this.closeModal2}>x</button>
            <h3 className="modal-title">Sign Up</h3>
          </div>

          <div className="modal-body">
            <form className="signup">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="firstnameInput"
                  placeholder="First Name"
                  maxLength="16"
                  value={this.state.firstnameInput}
                  onChange={this.handleChange}
                  required></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="lastnameInput"
                  placeholder="Last Name"
                  maxLength="16"
                  value={this.state.lastnameInput}
                  onChange={this.handleChange}
                  required></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="usernameInput"
                  placeholder="Username"
                  value={this.state.usernameInput}
                  onChange={this.handleChange}
                  required></input>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="emailInput"
                  placeholder="Email"
                  value={this.state.emailInput}
                  onChange={this.handleChange}
                  required></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="passwordInput"
                  placeholder="Password"
                  maxLength="20"
                  value={this.state.passwordInput}
                  onChange={this.handleChange}
                  required></input>
              </div>
              <hr></hr>
              <button
                className="btn waves-effect waves-light blue pulse"
                type="submit"
                onClick={this.handleSignupSubmit}>
                Sign Up <i class="material-icons right">send</i></button>
            </form>
          </div>
        </Modal>
        {/* END OF SIGN UP */}


      </nav>
    )
  }
}
