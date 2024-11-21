import { react } from 'react';
import "./quotes.css";
import quote1 from "../../assets/quote-pic.png"
import quote2 from "../../assets/quote-pic2.png"
import quote3 from "../../assets/quote-pic3.png"
const Quotes = () => {

  return (
    <section className='quotes' id='quotes'>
        <div className="quotes__container">
           <div className="quotes-content">
<h1 className='quotes-tittle'>93% of parents said their children enjoy using Kids Food Fight*</h1>
<div id='quotes-row-container' className="row-container">
    <div className="row">
       <h1>"KFF is a great way to get kids who don't like healthy food to try."</h1>
        <p>Name </p>
        <img className='quote-img' src={quote2} alt="" />
   
    </div>
    <div className="row">
   <h1>"KFF is a great way to get kids who don't like healthy food to try."</h1>
    <p>Name</p>
    <img className='quote-img' src={quote1} alt="" />
    </div>
    <div className="row">
        <h1>"KFF is a great way to get kids who don't like healthy food to try."</h1>
    <p>Name</p>
    <img className='quote-img' src={quote3} alt="" />
    </div>
</div>
             
            </div>   
        </div>
    </section>
  )
}

export default Quotes