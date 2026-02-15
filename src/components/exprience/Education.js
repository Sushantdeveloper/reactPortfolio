import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './exp.css'
function Education() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='eduction_section' id="education">
    <div className="wrapper">
      <div className="main_heading">
        <h2 style={{ color: darkMode ? "white" : "" }}>
          Education
        </h2>
      </div>
      <div className="content_container mb-5">
        <div className="date">
          <h6 style={{ color: darkMode ? "white" : "" }}>2019 - 2023</h6>
        </div>
        <div class="exp_details">
        <div className="circle"></div>
          <div className="company">
            <h4 style={{ color: darkMode ? "white" : "" }}>J B Institute of Technology (Dehradun)</h4>
            <p style={{ color: darkMode ? "white" : "" }}>B.Tech in Computer Science and Engineering </p>
          </div>
      </div>
      </div>
      <div className="content_container mb-5">
        <div className="date">
          <h6 style={{ color: darkMode ? "white" : "" }}>2017 - 2019</h6>
        </div>
        <div class="exp_details">
        <div className="circle"></div>
          <div className="company">
            <h4 style={{ color: darkMode ? "white" : "" }}>Central School For Tibetians, Herbertpur</h4>
            <p style={{ color: darkMode ? "white" : "" }}>Higher Secondary Certificate (12th) </p>
          </div>
      </div>
      </div>
      <div className="content_container">
        <div className="date">
          <h6 style={{ color: darkMode ? "white" : "" }}>2017</h6>
        </div>
        <div class="exp_details">
        <div className="circle"></div>
          <div className="company">
            <h4 style={{ color: darkMode ? "white" : "" }}>D R Secondary School, Herbertpur</h4>
            <p style={{ color: darkMode ? "white" : "" }}>Secondary School Certificate (10th)</p>
          </div>
      </div>
      </div>
    </div>

    </div>

  )
}

export default Education
