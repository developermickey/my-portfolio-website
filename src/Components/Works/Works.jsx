import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
  return (
   <div className="works">
       {/* left side */}
       <div className='awesome'>
            <span>Works For All These</span>
            <span>Brands & Clients</span>
            <spane>
            Frontend Developer with high level of experience in web 
            <br />designing and development, producting the quality work.
            <br />designing and development, producting the quality wor
            <br />designing and development, producting the quality wor
            </spane>
            
            <button className='button s-button'>Hire Me</button>
         
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>

        </div>
        {/* right side */}

        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* Background Circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>

   </div>
  )
}

export default Works