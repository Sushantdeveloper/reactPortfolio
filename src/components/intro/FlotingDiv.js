import React, { useContext } from "react";
import { themeContext } from "../../Context";
const FlotingDiv = ({image,txt1,txt2}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='floating'>
        <img src={image} alt=''/>
        <span style={{ color: darkMode ? "black" : "" }}>
            {txt1} <br/>
            {txt2}
        </span>
    </div>
  )
}
export default FlotingDiv
