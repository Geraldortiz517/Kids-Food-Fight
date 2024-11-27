import { react } from 'react';
import "./challenges.css";
import star from "../../assets/icon-star.png"
import challenge1 from "../../assets/4weekchallenge.jpg"

const Challenges = () => {

  return (
    <section className='challenges'  id='challenges-sec'>
        <div className="challenges-container">
        <div className="challenges-content">
            <h1>Wellcome to Our Challenges</h1>
            <h3>
                Through daily, weekly, and monthly challenges, your kids
                will learn to identify the best types of food through engaging games. 
                They'll associate healthy eating with the fun of play, all 
                under the guidanceof  highly qualified professionals in nutrition,
                pediatrics, and pycology.
            </h3>
        </div>
        <div className="challenges-content-container">
          <div className="challenge">
            <img className='challenge1' src={challenge1} alt="" />
            <div className="challenge-description">
                <h3 className='challenge-description-tittle'>Our Week Long Challenge</h3>

                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                    Daily challenges for all the family  
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                earn Daily Nutrition & Movement Points for 
                posting pics or comments about your tasks, and
                exchange them for merchandise or special offers 
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                        <p className='challenge-descrition-text'>
                    Access to our live Zoom Tribe meetings 
                    for nutritional support and education 
                    for you and your child.
                </p>
                </div>
            </div>
          </div>
          <div className="challenge">
            <img className=' challenge1' src={challenge1} alt="" />
            <div className="challenge-description">
                <h3 className='challenge-description-tittle'>
                    Our 4 Week Long Challenge
                </h3>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                    Daily challenges for all the family  
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                      <p className='challenge-descrition-text'>
                earn Daily Nutrition & Movement Points for 
                posting pics or comments about your tasks, and
                exchange them for merchandise or special offers 
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                    <p className='challenge-descrition-text'>
                    Access to our live Zoom Tribe meetings 
                    for nutritional support and education 
                    for you and your child.
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                      <p className='challenge-descrition-text'>
               Access to our Private KFF Kids and Parents Community 
               </p>
                </div>
               
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                    <p className='challenge-descrition-text'>
                        Food experiments for your child to Participate in!
                         </p>

                </div>
             

            </div>
          </div>
          <div className="challenge">
            <img className='challenge1' src={challenge1} alt="" />
            <div className="challenge-description">
                <h3 className='challenge-description-tittle'>
                    Our Year Long Challenge
                </h3>

                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                    Daily challenges for all the family  
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                earn Daily Nutrition & Movement Points for 
                posting pics or comments about your tasks, and
                exchange them for merchandise or special offers 
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
                    Access to our live Zoom Tribe meetings 
                    for nutritional support and education 
                    for you and your child.
                </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                     <p className='challenge-descrition-text'>
               Access to our Private KFF Kids and Parents Community 
               </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                    <p className='challenge-descrition-text'>
                        Food experiments for your child to Participate in! 
                        </p>
                </div>
                <div className="challeng-descrition-text-content">
                    <img src={star} alt="" />
                    <p className='challenge-descrition-text'
                    >Recipes, Recipe Contests, and Options for Healthy Food
                     </p>
                </div>
            


            </div>
          </div>
        </div>
        <div className="challenges-bottom-text">
            <h1>
                Give us the privilege to assist you in raising <strong>Healthy, Active and Smart</strong> kids
            </h1>
            <a className='btn' href="/game">Learn More</a>
        </div>
        </div>
    </section>
  )
}

export default Challenges