import './courses.css';
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Heart from'../../img/udemy.png'
import Glasses from'../../img/lv.png'
import Humble from'../../img/cetpa.jpg'
import Resume from'../../img/Sushant saini.pdf'
import { motion } from 'framer-motion';
import Card from '../card/Card';
function Courses() {
    const transition = {
        duration: 1,
        type: "spring",
      };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='course'>
        <div className='awsome'
      //  
        >
            <span style={{ color: darkMode ? "white" : "" }}>My Training</span>
            <span>& </span>
            <span>Certificate</span>
            <span style={{ color: darkMode ? "white" : "" }} >I have learn this Technologise to make a effective and Responsive Website</span>
            <a href={Resume} download >
<button className=" button i-course">Download CV</button>
</a>
<div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>


        </div>
        <div className='Certificate'></div>
        <motion.div 
           initial={{ left: " 39rem" }}
           whileInView={{ left:"48rem" }}
           transition={transition}
        className='c1' >
            <Card 
            emoji={Heart}
            heading={"JavaScript"}
            details={"Bacic & Advance concept of javascript. "}/>
        </motion.div>
        <motion.div 
          initial={{ left: " 14rem" }}
          whileInView={{ left: "28rem" }}
          transition={transition}
        className='c1 c2'   >
            <Card 
            emoji={Glasses}
            heading={"React"}
            details={"use of the JS library to a make effective UI "}/>
        </motion.div>

        <motion.div 
         initial={{ left: " 30rem" }}
         whileInView={{ left:"43rem" }}
         transition={transition}
        className='c1 c3' >
            <Card 
            emoji={Humble}
            heading={"Web Development"}
            details={"HTML, CSS, JavaScript,Mongodb,Nodejs "}/>
        </motion.div>
    </div>
  )
}

export default Courses