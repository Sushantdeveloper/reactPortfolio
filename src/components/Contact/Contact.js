import React, { useContext, useRef, useState } from "react";
import "./c.css";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setDone(true); // Show warning message instead of sending email
  };

  return (
    <div className="contact-section" id="contact">
      <div className="wrapper">
        <div className="contact-form">
          {/* Left side */}
          <div className="w-left">
            <div className="c-heading">
              <h2 style={{ color: darkMode ? "white" : "" }}>Contact me</h2>
              <div
                className="blur s-blur1"
                style={{ background: "#ABF1FF94" }}
              ></div>
            </div>
          </div>

          {/* Right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                className="user"
                placeholder="Name"
              />
              <input
                type="email"
                name="user_email"
                className="user"
                placeholder="Email"
              />
              <textarea
                name="message"
                className="user"
                placeholder="Message"
              />
              <input
                type="submit"
                value="Send"
                className="button i-button"
              />
              {/* Warning message */}
              <span style={{ color: "red", fontWeight: "bold", marginTop: "10px", display: "block" }}>
                {done &&
                  "⚠️ Warning: Contact form not yet configured, please contact me via normal email for now."}
              </span>
              <div
                className="blur c-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
