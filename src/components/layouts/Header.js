import React from 'react';
//import url from 'http://fonts.googleapis.com/earlyaccess/jejugothic.css';
function Header(){
    return(
    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            
  <a className="navbar-brand text-white" href="#">재단용장학금관리시스템</a>
  <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
  <ul className="navbar-nav ml-auto">
              <div class="btn-group mr-2" role="group" area-label="First group">
      <button className="btn btn-outline-light my-2 my-sm-0" type="button" size="sm">로그인</button>
       </div>
       <div class="btn-group mr-2" role="group" area-label="Second group">
       <button className="btn btn-outline-light my-2 my-sm-0" type="button">기관가입</button></div>
       
</ul>
    </div>
  
</nav>
    );
}

export default Header;