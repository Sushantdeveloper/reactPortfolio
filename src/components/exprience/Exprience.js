import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './exp.css'
function Exprience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Exprience'>
    <div className='achivement'>
    <div className='circle' style={{color: darkMode?'var(--orange)':''}}>0+</div>
<span  style={{color: darkMode?'white':''}}>Years</span>
<span>Exprience</span>

    </div>
    <div className='achivement'>
    <div className='circle'  style={{color: darkMode?'var(--orange)':''}}>3+</div>
<span>Completed</span>
<span>Project</span>

    </div>
    <div className='achivement'>
    <div className='circle'  style={{color: darkMode?'var(--orange)':''}}>0+</div>
<span>Companies</span>
<span>Work</span>


    </div>


    </div>

  )
}

export default Exprience