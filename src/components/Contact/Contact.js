import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import MainApp from "../server/MainApp";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span>favitech009@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:favitech009@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a>
          </Email>
          <br /><br />
          <MainApp />
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
