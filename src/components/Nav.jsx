import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
     <div className='nav-main'>
      <div className='nav'>

<section className='logo'>
NETFLIX
</section>
<section className="lan">

 <ul>
     <li>
         <select name="" id="">
             <option value="English">English</option>
             <option value="Hindi">Hindi</option>
             <option value="Telugu">Telugu</option>
         </select>
     </li>
     <li><button className='sign'>sign in</button></li>
 </ul>
</section>

   </div>
      <div className='form'>

   <h1 id='h1'>Unlimited movies, TV shows and more</h1>
   <h3 className='h3'>Watch anywhere. Cancel anytime.</h3>
   <h3 className='h3'>Ready to watch? Enter your email to create or restart your membership.</h3>
   <input type="text" placeholder='Enter your gmail' />
   <button>Get Started <img src="https://w7.pngwing.com/pngs/551/108/png-transparent-arrow-illustration-arrow-icon-right-arrow-angle-web-design-internet-thumbnail.png" height='10px' width='30px' alt="" /></button>

      </div>
   </div>
    )
  }
}
