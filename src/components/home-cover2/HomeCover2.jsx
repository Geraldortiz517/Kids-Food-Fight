import { react } from 'react';
import "./home-cover2.css";
import logo2 from "../../assets/hero5.png"

const Home_cover2 = () => {

  return (
    <section className='homeCover2' id='homeCover2'>
        <div className="homeCover2_container">
        
            <div className="homeCover2_content">

              <div className="row-container2">
               <div className="row22">
            <h1 className="home__subtitle2"><strong>Ready to kickstart a learning adventure?
            </strong> </h1>
    
                      <div className="home__btns">
             <a href="https://kids-food-fight.mn.co/plans/1440354" id='homebtn3' className="btn">
              Create Account
             </a>
           </div>

               </div>
               <div className="row1">
                <img id='hero4' src={logo2} alt="" />
                 </div>
              </div>
            </div>
           
        </div>
    </section>
  )
}

export default Home_cover2