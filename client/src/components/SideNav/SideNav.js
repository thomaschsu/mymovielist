import React, { Component } from "react";
import "./SideNav.css";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";

class SideNav extends Component {


  handleUserLogout = event => {
    event.preventDefault()
    window.location.replace("http://localhost:3000/")
    console.log("log me out")
    sessionStorage.clear()
    sessionStorage.setItem("logout", "hidden")
    sessionStorage.setItem("signin", "")
    sessionStorage.setItem("signup", "")
    sessionStorage.setItem("list", "hidden")

  }


  render() {
    return (
      <div className="SideNav animated fadeInLeftBig delay-1s">
        <ul>

          <li>
            <a className="small material-icons modal-trigger" href="#modal2" id="add">playlist_add</a>
            <div id="modal2" className="modal bottom-sheet">
              <div className="modal-content">
                <h4>Quick Add Movie</h4>
                <SearchBar />
                <SearchResult />
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </li>

          <li>
            <a className="small material-icons" href="##" id="chat" >chat</a>
          </li>

          <li>
            <a className="small material-icons" href="##" id="exit" onClick={this.handleUserLogout}>exit_to_app </a>
          </li>

        </ul>
      </div>
    )
  }
}



export default SideNav;