import { react } from 'react';
import "./mision.css";
import family from "../../assets/famili1.jpg";
import gameboard from "../../assets/gameboard.png";
import hero from "../../assets/herogreen1.png";
import check from "../../assets/check-white.png";
const Mission = () => {

  return (
    <section className='mission' id='mission'>
        <div className="mission__container">
           <div className="mission-content">
<h1 id='mission-tittle'>Our mission is to help every family  make better nutritional choices!</h1>
<p className='mission-subtittle'>With daily food dares, weekly food experiments, and plenty of 
    camaraderie, this program delivers simple takeaways each day 
    for parents and children alike.
</p>
<div id='mission-row-c' className="row-c">
<div className="mission-row1">

<img id='hero' src={hero} alt="" />
</div>

<div className="mission-row2">
<h1>Parents</h1>
<h3>Invest in your child's learning journey with engaging games that make eating healthy fun! </h3>
<div className="check-items">
<img src={check} alt="" />
<p>Help your child improve their phisical skills and confidence in a fun, safe and secure environment</p>
</div>
<div className="check-items">
<img src={check} alt="" />
<p>Motivate a healthy development, track their progress and inspire them to practice new skills</p>
</div>
<div className="check-items">
<img src={check} alt="" />
<p>Become your kids super hero, while they get more energy and concentration for school and sports  </p>
</div>
<h2>What if your kids knew how and wanted to make healthier food choices on their own? </h2>
<a className='btn' id='mission-btn' href="https://kids-food-fight.mn.co/plans/1440354"> Play Now</a>
</div>
</div>
             
            </div>   
        </div>
    </section>
  )
}

export default Mission