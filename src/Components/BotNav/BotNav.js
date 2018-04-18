import React from 'react';
import "./BotNav.css";

const BotNav = () =>{
  return(
  <div id = "BotNav" className="fixed-bottom">
  	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  	<a className="navbar-brand" href="#">Navbar</a>
   	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    	<span className="navbar-toggler-icon"></span>
  	</button>
  			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    			<div className="navbar-nav">
      				<a className="nav-item nav-link" href="#">Profile</a>
      				<a className="nav-item nav-link" href="#">Portfolio</a>
      				<a className="nav-item nav-link" href="#">Contact</a>
      			</div>
  			</div>
		</nav>
	</div>
  );
}

export default BotNav;
