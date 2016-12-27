import React from 'react';
import '../css/modules/blogitem.css';
import keyboard from '../img/img_keyboard.svg';

const BlogItem = () => (
  <div>
    <div className="blogItem purple">
      <hgroup>
        <h1>IPHONE 6S</h1>
        <h2>3D Touch. 12MP photos. 4K video. One powerful phone.</h2>
      </hgroup>
      <a href="#" className="btn btn-link">Read Now</a>
    </div>
    <div className="blogItem green centred">
      <hgroup>
        <h1>IPHONE 6S</h1>
        <h2>How to Use Rotary Evaporator in Chemical Labs</h2>
      </hgroup>
      <a href="#" className="btn btn-link">Read Now</a>
    </div>
    <div className="blogItem quarter blue centred">
      <img src={keyboard} className="img_keyboard" alt="Brand new keyboard" />
      <hgroup>
        <h2>Our Brand New Keyboard</h2>
      </hgroup>
      <a href="#" className="btn btn-link">Read Now</a>
    </div>
  </div>
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

export default BlogItem;
