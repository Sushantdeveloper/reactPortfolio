import'./intro.css'
// import'./floating.css'

import Github from'../../img/github.png';
import LinkedIn from'../../img/linkedin.png'
import Insta from'../../img/instagram.png'
import Vector1 from'../../img/Vector1.png';
import Vector2 from'../../img/Vector2.png'
import boy from'../../img/img3.png';
import glassesimoji from'../../img/glassesimoji.png'
import FlotingDiv from './FlotingDiv.js';
import Crown from '../../img/crown.png';
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
const Introsection=()=>{
const transition={duration:2,type:'spring'}
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
return(

    <div className='banner_section'>
        <div className='wrapper'>
<div className="Intro">
<div className="i-left">
<div className="i-name">
<h1 style={{ color: darkMode ? "white" : "" }}> Hy! I Am</h1>
<h1>Sushant Saini </h1>
<h4 style={{ color: darkMode ? "white" : "" }}>React Developer | HubSpot CMS Developer</h4>

</div>
<Link to="contact" smooth={true} spy={true}>
        <button className="button i-button">Hire me</button>
    </Link>
<div className='i-icons'>
<a href='#'><img src={Github} alt=''/></a>
<a href='#'><img src={LinkedIn} alt=''/></a>
<a href='#'><img src={Insta} alt=''/></a>


</div>


</div>
<div className="i-right">
<img src={Vector1} alt=''/>
<img src={Vector2} alt=''/>
<img style={{width:'12rem',height:'16rem'}} src={boy} alt=''/>
<motion.img 
initial={{left:'-36%'}}
whileInView={{left:'-22%'}}
transition={transition}
src={glassesimoji} alt=''/>

<motion.div className=' float1'
initial={{left:'-9rem'}}
whileInView={{left:'0rem'}}
transition={transition}>
<FlotingDiv image={Crown} txt1='Web' txt2='Developer'/>
</motion.div>
<motion.div className=' float2'
initial={{left:'74%'}}
whileInView={{left:'60%'}}
transition={transition} >
<FlotingDiv image={Crown} txt1='Web' txt2='Designer'/>
</motion.div>
</div>
<div className='blur' style={{background:'rgb(238 210 255)'}}></div>
<div className='blur' style={{background:'#C1F5FF',top:'22rem',width:'21rem',height:'11rem',left:'22rem'}}></div>

</div>
</div>
</div>
)
}
export default Introsection
