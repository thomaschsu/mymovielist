import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="page-footer">
          <div className="container">
            <div className="row">
            
              <div className="col l6 s12" id="siteInfo">
                <h5 className="text">My Movie List</h5>
                <p className="grey-text text-lighten-4">
                List, rank, and chat about your favorite movies.</p>
                
               <div id="footLinks">
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Your List</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Search</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Sign Up</a></li>
                </ul>
              </div>
            
              </div>
              
              <div className="col l4 offset-l2 s12" id="col2">
                <h5 className="text">Contributers</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Thomas Hsu</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Mark Albright</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Daniel Kissiday</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Andrew Murphy</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Robert Robinson</a></li>
                </ul>
               
              </div>
             
              </div>
              <div className="footer-copyright" id="col3">
           
           <ul class="nav nav-bar" id="icons">
         <li class="nav-item">
           <a class="nav-link" href="#">
             <i class="fab fa-facebook-square fa-2x"></i>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">
             <i class="fab fa-twitter-square fa-2x"></i>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">
             <i class="fab fa-instagram fa-2x"></i>
           </a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">
             <i class="fab fa-youtube fa-2x"></i>
           </a>
         </li>
       </ul>
       <p> 
            © 2018 Copyright
               </p>
         </div>
            </div>
           
          
          
        </footer>
        
);
export default Footer;