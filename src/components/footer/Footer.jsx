import { react } from 'react';
import "./footer.css";
import logo from "../../assets/logo-white.png"
import facebook from "../../assets/icon-facebook.png"
import instagram from "../../assets/icon-instagram.png"
import linktin from "../../assets/icon-linkin.png"
const Footer = () => {

  return (
    <section className='footer' id='footer'>
        <div className="footer_container">
           <div className="footer-content">
<div id='footer-row-1' className="footer-row">
   <a href="/"><img src={logo} alt="" /></a> 
    <div className="footer-social-links">
<a href="https://www.facebook.com/Kidsfoodfight"><img src={facebook} alt="" /></a>
<a href="https://www.instagram.com/kidsfoodfight/?igshid=YmMyMTA2M2Y%3D"><img src={instagram} alt="" /></a>
<a href="https://www.linkedin.com/company/kids-food-fight"><img src={linktin} alt="" /></a>
    </div>
</div>
            </div>   
            <div className="footer-row">
                <h2>kids Food Fight</h2>
                <a href="/about"> <p>About Us</p></a>
               <a href="/"><p>Careers</p></a>
                <a href="/blog"><p>Blog</p></a>
            </div>
            <div className="footer-row">
            <h2>More Info</h2>
                <a href="/game"><p>Our Game</p></a>
                <a href="https://kids-food-fight.mn.co/plans/1440354?bundle_token=ceb14e63f863a7c2ac80c5f78df7dbb8&utm_source=manual"><p>Pricing</p></a>
                

            </div>
            <div id='footer-row-4' className="footer-row">
                <h2>For Bussinesses</h2>
                <div className="bussiness-links">
                <a href="/partners"><p>Become a Partner</p></a>
                <a href="/partners"><p>Partner Application</p></a>
                <a href="/partners"><p>Benefits</p></a>

                </div>
              
            </div>
        </div>
    </section>
  )
}

export default Footer