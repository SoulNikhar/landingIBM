// src/DonationPortal.js
import React, { useState } from 'react';
import '../css/Donation.css';
import DonateMoney from './DonateMoney';
import DonateFood from './DonateFood';
// import VanillaTilt from 'vanilla-tilt';
const Donation = () => {
  const [donationType, setDonationType] = useState('money')
  let target = 1000000
  let current = 869459
  // const element = document.querySelectorAll('.left>*, .right>*')
  // VanillaTilt.init(element, {
  //   max: 3,
  //   reset: false,
  //   speed: 200,
  //   easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)'
  // })
  // const toActive = ()=>{
  //   document.querySelectorAll('.donation-type > span').forEach(element =>{
  //     element.classList.toggle('active')
  //   })
  // }
  const handleClick = (type) => {
    setDonationType(type);
  };
  return (
    <div>
      <h1 className='donation-head'>Make a Donation!!</h1>
      <div className="main">
        <div className="left">
          <div className="content-1">
            <img src="https://images.ctfassets.net/z0x29akdg5eb/27Zr13KQjfdDvNc0T4L1wx/daa855efe9c03b41e373bc2a27d432fd/2024118_SDN_PortSudanDistributions_AbubakarGARENLABEI__4_of_41_-b.jpg?w=842&h=527&fit=fill&q=80&fm=avif" alt="..." />
            <div>
              <span>{target} meals</span>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <span>{current} meals</span>
              <span>{(current/target*100).toFixed(2)}%</span>
            </div>
          </div>
          <div className="content-2">
            <h1>Overview</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ut saepe, veritatis quibusdam molestiae quia soluta, doloremque, amet natus placeat nulla atque? Aliquam, culpa totam odit quas doloremque natus? Iste voluptate dolores, harum ex id expedita culpa deserunt, autem est rem, laborum praesentium quae. Rerum dolores laudantium odio, possimus neque nihil dolorem dolorum a provident mollitia itaque veniam. Assumenda, unde ratione! Ducimus molestias ut expedita dolore, deleniti quam cumque iste laborum libero ipsum aperiam harum minus perspiciatis placeat provident et, eaque dolor voluptatibus in soluta vero aut quas voluptate dolorem. Nobis doloremque molestias earum illum in rerum eos. Inventore rerum nobis cumque, ullam sit expedita maiores deserunt iure tempora minus magnam consequatur quaerat quia esse beatae! Dicta laudantium placeat necessitatibus expedita omnis esse laboriosam nisi culpa cupiditate deserunt cum nobis qui tenetur aperiam quia eaque sequi accusantium perspiciatis libero tempora unde molestias, ipsa odio magnam. Aut sit cum porro, delectus veritatis pariatur natus nam! Quas quibusdam veritatis eligendi at quod odit necessitatibus iure non placeat illo, repudiandae quae! Ex, vero soluta. Dolorum, quidem, minus facilis, voluptatibus officia et ratione perspiciatis dignissimos adipisci qui quaerat perferendis nesciunt! Cumque aliquid tempora at cupiditate? Recusandae impedit repellendus sint voluptatibus quos? Alias, quos pariatur.</p>
          </div>
        </div>
        <div className="right">
          <div className='donation-type'>
            <span className={donationType === 'money'?'active': ''} onClick={()=>handleClick('money')}>Donate Money</span>
            <span className={donationType === 'food'?'active':''} onClick={()=>handleClick('food')}>Donate Food</span>
          </div>
          {donationType === 'money' && <DonateMoney />}
          {donationType === 'food' && <DonateFood />}
        </div>
      </div>
    </div>
  );
};

export default Donation;
