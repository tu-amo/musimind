import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

       <div className="logo">
         LOGO
       </div>

       <nav>
         <ul>
           <li className="first">
             <a href="#">Home</a>
           </li>
           <li>
             <a href="#">Courses</a>
           </li>
           <li className="last">
             <a href="#">Contact</a>
           </li>
         </ul>
       </nav>

       </header>
    );
  }
}
// function Header() {
//  return (
//    <header className="App">
//    test my header
//    </header>
//  );
//}

export default Header;
