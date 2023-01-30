// import React from 'react'
// import './contact.css'
// function Contact() {
//   return (
//     <div className="contact-form" id="contact">
//     {/* left side copy and paste from work section */}
//     <div className="w-left">
//       <div className="awesome">
//         {/* darkMode */}
//         <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
//         <span>Contact me</span>
//         <div
//           className="blur s-blur1"
//           style={{ background: "#ABF1FF94" }}
//         ></div>
//       </div>
//     </div>
//     {/* right side form */}
//     <div className="c-right">
//       <form ref={form} onSubmit={sendEmail}>
//         <input type="text" name="user_name" className="user"  placeholder="Name"/>
//         <input type="email" name="user_email" className="user" placeholder="Email"/>
//         <textarea name="message" className="user" placeholder="Message"/>
//         <input type="submit" value="Send" className="button"/>
//         <span>{done && "Thanks for Contacting me"}</span>
//         <div
//           className="blur c-blur1"
//           style={{ background: "var(--purple)" }}
//         ></div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Contact
// import 'Contacts.css'
// import React, { useContext } from "react";
// import { themeContext } from "../../Context";
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './c.css'
// import { useState } from 'react';
// function Contact() {
//   const form = useRef();
// const [done, setDone]=useState(false)
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm()
//       .then((result) => {
//           console.log(result.text);
//           setDone(true);
//           form.reset();
//       }, (error) => {
//           console.log(error.text);
//       });
//   };
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className='Contact-form' id="Contact">
//       <div className='c-left'>
//       <div className="c-heading">
//                  {/* darkMode style={{color: darkMode?'white': ''}}*/}
//                <span  style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
//                <span>Contact me</span>
//                <div
//           className="blur s-blur1"
//          style={{ background: "#ABF1FF94" }}
//        ></div>
//    </div>
//       </div>

//       <div className="c-right">
//        <form ref={form} onSubmit={sendEmail}>
//          <input type="text" name="user_name" className="user"  placeholder="Name"/>
//          <input type="email" name="user_email" className="user" placeholder="Email"/>
//          <textarea name="message" className="user" placeholder="Message"/>
//          <input type="submit" value="Send" className="button i-button"/>
//          <span>{done && "Thanks for Contacting me"}</span>
//          <div
//            className="blur c-blur1"
//            style={{ background: "var(--purple)" }}
//          ></div>
//        </form>
//      </div>
//     </div>
//   )
// }

// export default Contact
import React, { useContext, useRef, useState } from "react";
import "./c.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hkrwu9i', 'template_rv11iyp', form.current, 'JbdwP0a0woinDwF2h'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="c-heading">
         
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button i-button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;