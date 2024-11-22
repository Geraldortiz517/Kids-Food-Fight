import { react } from 'react';
import "./hero.css";
import icon3 from "../../assets/icon-book.png";
import gameboard from "../../assets/gameboard.png";
import icon1 from "../../assets/icon-veggies.png";
import icon2 from "../../assets/icon-kid.png";
import icon4 from "../../assets/icon-salad.png";

const Hero = () => {

  return (
    <section className='hero'  id='hero-sec'>
        <div className="hero-container">
        <div className="hero-img-container">
            <img src={gameboard} alt="" />
        </div>
        <div className="text-icons">
            <div className="text-icon-content">
                <img src={icon4} alt="" />
                <p>Learn to recognize the macronutrients: Proteins, Fats, and Carbs</p>
            </div>
            <div className="text-icon-content">
                <img src={icon3} alt="" />
                <p>Experiment trying new fruits and veggies</p>
            </div>
            <div className="text-icon-content">
                <img src={icon1} alt="" />
                <p>Create their own balanced meal recipes </p>
            </div>
            <div className="text-icon-content">
                <img src={icon2} alt="" />
                <p>Have more energy and concentration for school and sports </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero