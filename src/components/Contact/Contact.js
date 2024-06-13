import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";

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
          <a
            className="btn PrimaryBtn"
            href="https://favitech.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 15, textAlign: "center", margin: "2rem auto 0 auto" }}
          >
            Reach out to FAVITECH
          </a>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
