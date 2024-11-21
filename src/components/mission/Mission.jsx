import { react } from 'react';
import "./mision.css";
import family from "../../assets/famili1.jpg";
import gameboard from "../../assets/gameboard.png";
import hero from "../../assets/herogreen1.png";
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
<p>Invest in your child's learning journey with engaging games that make eating healthy fun! </p></div>
</div>
             
            </div>   
        </div>
    </section>
  )
}

export default Mission