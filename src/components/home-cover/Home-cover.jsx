import { react } from 'react';
import "./home-cover.css";
import logo2 from "../../assets/hero-2.png"

const Home_cover = () => {

  return (
    <section className='home' id='home'>
        <div className="home__container">
        
            <div className="home__content">

              <div className="row-container">
               <div className="row2">
            <h1 className="home__subtitle"><strong>Kids Food Fight</strong> </h1>
              <p className="home__title">  
           
In our Game,  Earn Daily Points via Quick Nutrition Lessons and fun Experiments
 for Breakfast, Lunch, Dinner, Snacks & Desserts.  
             </p>
                      <div className="home__btns">
             <a href="#" id='homebtn1' className="btn">
              Learn More
             </a><a href="#" id='homebtn2' className="btn">
              Game
             </a>
           </div>

               </div>
               <div className="row1">
                <img src={logo2} alt="" />
                 </div>
              </div>
            </div>
           
        </div>
    </section>
  )
}

export default Home_cover