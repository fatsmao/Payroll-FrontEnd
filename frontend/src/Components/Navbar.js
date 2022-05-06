import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <header className="nav-container">

    <div className="navbrand nav-item">
      <Link to="/logIn">
      <li src='./images/navbarlogo.png' width="100" alt="logo"></li>
      </Link> 
    </div>

    <div className="navlinks nav-item">
      <Link to="/">
      <li>HOME</li>
      </Link>

      <Link to="/admin">
      <li>ADMIN LOGIN</li>
      </Link>
      
      <Link to="/employee">
      <li>EMPLOYEE LOGIN</li>
      </Link>
      
      <Link to="/updates">
      <li>UPDATES</li>
      </Link>

      <Link to="/listemployees">
      <li>EMPLOYEES</li>
      </Link>

    </div>

    <div className="nav-item logout">
    <Link to="/logIn">
    <button className="logoutButton">LOGOUT</button>
    </Link>
    </div>

    </header>
    );
    }
    
    export default Navbar;