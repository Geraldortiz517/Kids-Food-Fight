import Header from '../../components/header/Header'
import Home_cover from '../../components/home-cover/Home-cover'
import React from 'react'
import Quotes from '../../components/quotes/Quotes'
import Mission from '../../components/mission/Mission'
import Benefits from '../../components/benefits/Benefits'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import Challenges from '../../components/challenges/Challenges'
import HomeCover2 from '../../components/home-cover2/HomeCover2'


export default function Home () {
return(
<div className="">
    <Header/>
<Home_cover/>
<Quotes/>
<Mission/>
<Challenges/>
<Hero/>
<HomeCover2/>
<Footer/>
</div>
)
}