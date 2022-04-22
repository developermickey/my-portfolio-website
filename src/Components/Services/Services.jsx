import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';
const Services = () => {
  return (
    <div className='services'>
        {/* left side */}
        <div className='awesome'>
            <span>My Awesome</span>
            <span>Services</span>
            <spane>
            Frontend Developer with high level of experience in web <br />designing and development, producting the quality work.
            </spane>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: '#ABF1FF94'}}></div>

        </div>
        {/* right side */}
        <div className='cards'>
          {/* 1st Cards */}
         <div style={{left: '16rem'}}>
        <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adove, Adobe XD"}/>
         </div>

        {/* 2nd Cards */}
         <div style={{left: '-4rem', top: '12rem'}}>
        <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"HTML, CSS, JavaScript, ReactJS, Next JS, "}/>
         </div>

         {/* 3rd Cards */}
         <div style={{left: '12rem', top: '19rem'}}>
        <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Figma, Sketch, Photoshop, Adove, Adobe XD"}/>
         </div>
         <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>

        </div>

    </div>
  )
}

export default Services