import React from 'react';
import '../css/modules/navbar.css';
import logo from '../img/tg_logo.svg';

const NavBar = () => (
  <nav className="navbar fixed_top">
    <img src={logo} className="tg_logo" alt="logo" />
    <h1>Creative Space of UI Designer &amp; Developer, Troy Ginbey</h1>
    <ul>
      <li><a className="active" href="/">Blog</a></li>
      <li><a href="/#/about">About</a></li>
      <li><a href="/#/work">Work</a></li>
      <li><a href="/#/skills">Core Skills</a></li>
      <li><a className="btn btn-download" href="/#/cv">Download CV</a></li>
      <li><a href="/#/contact">Contact</a></li>
    </ul>
  </nav>
)

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar">
//       <img src={logo} className="tg_logo" alt="logo" />
//       <h1>Creative Space of UI Designer &amp; Developer, Troy Ginbey</h1>
//       <ul>
//         <li><a className="active" href="/">Blog</a></li>
//         <li><a href="/#/about">About</a></li>
//         <li><a href="/#/work">Work</a></li>
//         <li><a href="/#/skills">Core Skills</a></li>
//         <li><a href="/#/cv">Download CV</a></li>
//         <li><a href="/#/contact">Contact</a></li>
//       </ul>
//     </nav>
//     );
//   }
// }

export default NavBar;
