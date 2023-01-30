import React, { useContext } from "react";
import { themeContext } from "../../Context";
 import "./Skills.css";

import Upwork from "../../img/h5.png";
import Fiverr from "../../img/css.png";
 import Amazon from "../../img/js.png";
 import Shopify from "../../img/react1.png";
import Facebook from "../../img/node.png";
import { motion } from "framer-motion";
import Resume from'../../img/Sushant saini.pdf'

function Skills() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='skills' id="skills">
            <div className='awsome'>
            <span  style={{ color: darkMode ? "white" : "" }}>Skills</span>
            <span style={{display:'none'}}>I</span>
            <span style={{display:'none'}}>Know</span>
            <span  style={{ color: darkMode ? "white" : "" }}>I have learn this Technologies to make a effective and Responsive Website</span>
    
            <a href={Resume} download >
<button className=" button i-course">Download CV</button>
</a>

<div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>


        </div>

<div className='s-right'>
<motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >

<div className="w-secCircle">
           <img src={Upwork} alt="" />
        </div>
       <div className="w-secCircle">
          <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Amazon} alt="" />
        </div>{" "}
        <div className="w-secCircle">
          <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
          <img src={Facebook} alt="" />
        </div>
        <div className="w-backCircle blueCircle"></div>
  <div className="w-backCircle yellowCircle"></div>

</motion.div>
</div>

        {/* </div> */}
    </div>
  )
}

export default Skills