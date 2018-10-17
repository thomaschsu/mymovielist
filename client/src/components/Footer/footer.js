import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Footer.css';

class Footer extends Component {

  constructor() {
    super();

    this.state = {
      loginError: false,
      logIn: false

    };

  }

  componentDidMount() {
    //console.log(sessionStorage.length);
    if (sessionStorage.length === 0) {
      this.setState({
        loginError: false
      })
    } else {
      this.setState({
        loginError: true
      })
    }
  }



  render() {
    return(
  <footer className="page-footer">
    <div className="container">
      <div className="row">

        <div className="col l6 s12" id="siteInfo">
          <h5 className="text">My Movie List</h5>
          <p className="grey-text text-lighten-4">
            List, rank, and chat about your favorite movies.</p>

          <div id="footLinks">
            <ul>
              <li><Link to="/" className="nav-link">
                Home
          			</Link></li>
              <li className={this.state.loginError ? '' : 'hidden'}><Link to="/movielist" className="nav-link">
                Your List
          			</Link></li>
              <li className={this.state.loginError ? '' : 'hidden'}><Link to="/search" className="nav-link">
                Search
         			</Link></li>
            </ul>
          </div>

        </div>

        <div className="col l4 offset-l2 s12" id="col2">
          <h5 className="text">Contributers</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://github.com/thomaschsu">Thomas Hsu</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/malbright218">Mark Albright</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/dank1302">Daniel Kissiday</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/a-murph">Andrew Murphy</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/Rjr211">Robert Robinson</a></li>
          </ul>

        </div>

      </div>
      <div className="footer-copyright" id="col3">

        <ul className="nav nav-bar" id="icons">
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://twitter.com/">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </li>
        </ul>
        <p>
          © 2018 Copyright
               </p>
      </div>
    </div>



  </footer>
    )
  }
}


export default Footer;