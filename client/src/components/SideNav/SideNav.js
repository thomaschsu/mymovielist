import React, { Component } from "react";
import "./SideNav.css";
import FriendBar from "../FriendBar";




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
            <a className="small material-icons modal-trigger tooltipped" href="#modal2" id="add" data-position="right" data-tooltip="Quick Add Movie">playlist_add</a>
            <div id="modal2" className="modal bottom-sheet">
              <div className="modal-content">
                <h4>Add Friends</h4>
                <FriendBar />
                
              </div>
              <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
              </div>
            </div>
          </li>

          <li>
            <a className="small material-icons modal-trigger tooltipped" href="#modal1" id="contact_mail" data-position="right" data-tooltip="email">contact_mail</a>
            <div id="modal1" className="modal modal-fixed-footer">
              <div className="modal-content">
                <h4>Contact Us!</h4>

                <form method="POST" action="https://formspree.io/thomaschsu+mml@gmail.com">
                  <input type="email" name="email" placeholder="Your email"/>
                    <textarea name="message" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
</form>

              </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
              </div>
          </li>

            <li>
              <a className="small material-icons tooltipped" href="##" id="exit" onClick={this.handleUserLogout} data-position="right" data-tooltip="Log Out">exit_to_app </a>
            </li>

        </ul>
      </div>
        )
      }
    }
    
    
    
export default SideNav;