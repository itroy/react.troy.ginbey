import React from 'react';
import '../css/modules/contentBoxWidthHalf.css';
// import keyboard from '../img/img_keyboard.svg';

const ContentBoxWidthHalf = ({colour}) => (
  // <div>
    <div className={`blogItem  ${colour}`}>
      <hgroup>
        <h1>IPHONE 6S</h1>
        <h2>3D Touch. 12MP photos. 4K video. One powerful phone.</h2>
      </hgroup>
      <a href="#" className="btn btn-link">Read Now</a>
    </div>
    /* <div className="blogItem green centred">
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
  </div> */
);

// ContentBoxWidthHalf.propTypes = {
//   type: React.propTypes.string.isRequired
// };

export default ContentBoxWidthHalf;
