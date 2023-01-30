import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './work.css';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/m-player.jpeg";
 import Ecommerce from "../../img/pf.jpeg";
 import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
function Woork() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="project">
   
        {/* style={{color: darkMode?'white': ''}} */}
        <span  style={{ color: darkMode ? "white" : "" }}>Projects</span>
  <Swiper
  spaceBetween={24}
  slidesPerView={2}
  grabCursor={true}
   className="portfolio-slider" >
      <SwiperSlide>
      <h1 className='ph'>Music-Player</h1>

        <img src={Sidebar} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='ph'>GYM Website</h1>
      

        <img src={HOC} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='ph'>Portfolio</h1>
      

        <img src={Ecommerce} alt="" />
      </SwiperSlide>
      {/* <SwiperSlide>
      <h1 className='ph'>Portfolio</h1>
     

        <img src={MusicApp} alt="" />
      </SwiperSlide> */}
      </Swiper> 
    </div>
  )
}

export default Woork