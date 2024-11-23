import React, { useEffect, useState } from "react";
import logo2 from "../../assets/logo-1.png"
import menubar from "../../assets/menubar.png"
import "./header.css";
import game from "../../pages/game/Game"
const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
const changeHeader =() => {
    if (window.scrollY >= 80){
        setScrollHeader(true)
    }
    else{
        setScrollHeader(false)
    }
};

useEffect(() => {
    window.addEventListener("scroll", changeHeader)
}, []);

return ( 
    <header className={ `${ scrollHeader ? 'scroll-header' : ''} header`}>
        <nav className="nav container">
            <a href="/" className="nav__logo">
                <img src={logo2} alt="" className="nav__logo-img" />
            </a>
            <div className={ `${ showMenu ? 'show-menu' : ''} nav__menu`}>
                <ul className="nav__list"> 
                   <li className="nav__item">
                   <a href="/ "onClick={() => setShowMenu (!showMenu)} className="nav__link">Home</a>
                  </li>
                   <li className="nav__item">
                    <a href="/game" onClick={() => setShowMenu (!showMenu)} className="nav__link">Game</a>
                   </li>
                   <li className="nav__item">
                    <a href="/about"onClick={() => setShowMenu (!showMenu)} className="nav__link">About Us</a>
                   </li>
                   <li className="nav__item">
                    <a href="/blog" onClick={() => setShowMenu (!showMenu)} className="nav__link">Blog</a>
                   </li>
                   <li className="nav__item">
                    <a href="/partners" onClick={() => setShowMenu (!showMenu)} className="nav__link">Partners</a>
                   </li>
                   <li id="nav-btn1" className="btn">
                    <a  href="https://kids-food-fight.mn.co/plans/1440354" onClick={() => setShowMenu (!showMenu)} className="nav__link">Sign Up</a>
                   </li>
                   <li id="nav-btn2" className="btn">
                    <a id="navbtn2" href="https://kids-food-fight.mn.co/sign_in?from=https%3A%2F%2Fkids-food-fight.mn.co%2Fplans%2F1440354" onClick={() => setShowMenu (!showMenu)} className="nav__link">Log In</a>
                   </li>
                
                </ul>
            </div>

          <div className="nav__toggle" onClick={() => setShowMenu (!showMenu)}>
           <img src={menubar} alt="" />
          </div>

        </nav>
    </header>
)
}
export default Header