import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h6>Questions? Call 000-800-919-1694</h6>
        <input type="text" placeholder='Enter your gmail' />
   <button>Get Started <img src="https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png" height='10px' width='30px' alt="" /></button>
      </div>
    )
  }
}
