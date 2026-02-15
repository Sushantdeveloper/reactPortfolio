import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './exp.css'
function Exprience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Exprience' id="exprience">
    <div className="wrapper">
      <div className="main_heading">
        <h2 style={{ color: darkMode ? "white" : "" }}>
          Exprience
        </h2>
      </div>
      <div className="content_container">
        <div className="date">
          <h6 style={{ color: darkMode ? "white" : "" }}>2025 - Present</h6>
        </div>
        <div class="exp_details">
        <div className="circle"></div>
          <div className="company">
            <h4 style={{ color: darkMode ? "white" : "" }}>Go Inbound, India</h4>
            <p style={{ color: darkMode ? "white" : "" }}>I’m currently working as a Software Engineer at Goinbound, where I build dynamic HubSpot CMS websites and implement CRM integrations. I’ve worked on HubDB-powered pages, Airtable–HubSpot data sync, and a bi-directional HubSpot–Plato integration for patient and appointment management. I also developed a doctor dashboard with secure patient messaging functionality.</p>
          </div>
      </div>
      </div>
<br></br>
      <div className="content_container">
        <div className="date">
          <h6 style={{ color: darkMode ? "white" : "" }}>2023 - 2025</h6>
        </div>
        <div class="exp_details">
        <div className="circle"></div>
          <div className="company">
            <h4 style={{ color: darkMode ? "white" : "" }}>Palmspire It Solutions Pvt LTD, Bijnor(U.P)</h4>
            <p style={{ color: darkMode ? "white" : "" }}>🚀 My journey in software development began as a Software Developer at Palmspire Technology. During my time there, I worked on various client projects using HubSpot CMS and played a key role in developing an Inbound Job Portal. These experiences significantly boosted my skills in HTML, CSS, JavaScript, React, Supabase, JQuery, and GitHub. They also deepened my passion for building high-performing, scalable websites and applications.
<br></br>With one year of experience in frontend development at Palmspire Technology, I am eager to continue learning and innovating. I’m seeking opportunities to further enhance my skills and contribute to exciting projects. If you’re looking for a dedicated and skilled software engineer with a drive for excellence and a knack for tackling challenging problems, let’s connect! I’m always eager to explore new technologies and make a meaningful impact. 🤝🚀</p>
          </div>
      </div>
      </div>
    </div>

    </div>

  )
}

export default Exprience
