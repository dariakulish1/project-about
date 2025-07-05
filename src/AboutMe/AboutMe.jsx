import "./AboutMe.scss";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { AnimatedSection } from "../utils/AnimatedSection";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <AnimatedSection>
        <div className="about-me__card">
          <h1>About Me</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginBottom: "0.5rem",
            }}
          >
            <AccessibilityNewIcon style={{ color: "#ef601e", fontSize: 32 }} />
            <p className="about-me__info-text" style={{ margin: 0 }}>
              My name is Daria, I am a beginner Frontend/React developer
              passionate about building beautiful and functional web
              experiences.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginBottom: "0.5rem",
            }}
          >
            <AutoAwesomeMosaicIcon style={{ color: "#caaacd", fontSize: 32 }} />
            <p className="about-me__info-text" style={{ margin: 0 }}>
              I have completed courses in React, HTML/CSS, JavaScript, and
              gained knowledge in soft skills, fundamental programming, and
              English.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginBottom: "0.5rem",
            }}
          >
            <WorkIcon style={{ color: "#cb962e", fontSize: 32 }} />
            <p className="about-me__info-text" style={{ margin: 0 }}>
              My pet projects include a Weather App (using API for forecasts)
              and a Movie App (with search, local storage, react-router-dom, and
              Redux).
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.7rem",
              marginBottom: "0.5rem",
            }}
          >
            <ContactMailIcon style={{ color: "#0081a7", fontSize: 32 }} />
            <p className="about-me__info-text" style={{ margin: 0 }}>
              I have commercial experience at Brainly Solution: building landing
              pages with Firebase, animation, user data forms, and admin panels
              with charts, tables, calendars, and adaptive interfaces.
            </p>
          </div>
          <button onClick={() => window.history.back()}>Go Back</button>
        </div>
      </AnimatedSection>
    </div>
  );
};
