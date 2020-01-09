import React from 'react';
import {Link} from 'react-router-dom';

//import url from 'http://fonts.googleapis.com/earlyaccess/jejugothic.css';
function Navbar(){
    return(
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <li class="nav-item">
        <Link className="nav-link ml-5" to="/register" >장학금등록  <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link ml-5" to="scholarship_list" >장학금확인/선발</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link ml-5" to="use_info" >사이트이용방법</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-uppercase  ml-5" to="/" ><i class="fas fa-home"></i>&nbsp;home
        <span class="sr-only">(current)</span>
        </Link>
      </li>
    </ul>
    
  </div>
</nav>
    );
}

export default Navbar;