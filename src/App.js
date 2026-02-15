import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Introsection from './components/intro/Introsection';
import Courses from './components/services/Courses';
import Exprience from './components/exprience/Exprience';
import Skills from './components/skills/Skills';
import About from './components/intro/About';
// import Skills from './components/skills/Skills';
import Contact from './components/Contact/Contact';
import Woork from './components/works/Woork';
import Testimonials from './components/Testimonials/Testimonials';
import Fotter from './components/Fotter/Fotter';
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
     <div className='App'
     style={{
      background: darkMode ? "black" : "",
    color: darkMode ? "white" : "",
    }}
     >
     
   <Navbar/>
   <Introsection/>
         <About/>
   <Exprience/>
   <Skills/>
<Woork/>
<Courses/>
<Testimonials/>
<Contact/>
<Fotter/>
     </div>
   
  );
}

export default App;
