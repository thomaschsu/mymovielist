import React from "react";
import "./SideNav.css";

const SideNav = () => (
  <div className="SideNav animated fadeInLeftBig delay-1s">
  <ul>

 <li>
  <a className="small material-icons modal-trigger" href="#modal2" id="add">playlist_add</a> 
  <div id="modal2" class="modal modal-fixed-footer">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>  
</li>

  <li>
    <a className="small material-icons" href="#" id="chat">chat</a>
  </li>

  <li>
  <a className="small material-icons" href="#" id="exit">exit_to_app </a>
  </li>

</ul>
  </div>
);


export default SideNav;