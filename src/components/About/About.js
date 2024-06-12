import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            👋 Hi, I'm <strong>Favour Ejiofor</strong>, a dedicated coder who thrives on turning
            complex problems into elegant solutions. With a strong foundation in
            [HTML, CSS, SCSS, JavaScript, MERN], I specialize in creating clean,
            efficient, and scalable code. My passion for innovative technology
            drives me to continuously learn and adapt, ensuring I stay at the
            forefront of industry trends. Whether it’s developing robust
            applications or streamlining processes, I bring creativity and
            precision to every project. Let's build the future together, one
            line of code at a time. 🚀
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
