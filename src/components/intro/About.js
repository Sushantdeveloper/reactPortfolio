import React, { useContext } from "react";
import { themeContext } from "../../Context";
import'./intro.css'

function About() {
    const transition={duration:2,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
return (
<div  className="about_section">
<div className="wrapper line">
<h3 style={{ color: darkMode ? "white" : "" }}>About</h3>
<p style={{ color: darkMode ? "white" : "" }}>
I’m a Frontend Developer with strong experience in React and JavaScript, building user-centric web applications and CRM integrations. I’ve worked extensively on HubSpot CMS Website creation, API integrations, and real-time data synchronization between platforms.
<br></br>
I enjoy building scalable systems, optimizing performance, and writing clean, maintainable code. Currently, I’m focused on strengthening my problem-solving skills and system design knowledge to transition into high-impact product-based environments.
</p>

</div>
</div>

)
}

export default About
