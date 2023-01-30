import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './work.css';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/music.png";
 import Ecommerce from "../../img/pf.png";
 import HOC from "../../img/gym.png";
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
      <h1 className='ph'>GYM-Website</h1>
        <a href='https://sushantdeveloper.github.io/reactgymwebsite/'>
        <img src={HOC} alt="" />

</a>

      </SwiperSlide>
      <SwiperSlide>
      <h1 className='ph'>Portfolio</h1>

<a href='https://sushantdeveloper.github.io/reactPortfolio/'>
<img src={Ecommerce} alt="" />

</a>
      </SwiperSlide>
      <SwiperSlide>
      <h1 className='ph'>Music-Player</h1>
<a href='https://sushantdeveloper.github.io/SpotifyMusicplayer/'>
<img src={Sidebar} alt="" />

</a>

      </SwiperSlide>
      </Swiper> 
    </div>
  )
}

export default Woork