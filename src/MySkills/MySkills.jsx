import "./MySkills.scss";
import materialIco from "../img/materialUI-icon.svg";
import typeScript from "../img/typeScript.svg";
import jsIco from "../img/jsIco.png";
import CssIcon from "@mui/icons-material/Css";
import icoApi from "../img/api.png";
import reactRouterIco from "../img/rr_logo_light.svg";
import reduxIco from "../img/reduxIco.svg";
import logoScss from "../img/logoScss.svg";
import reactLogo from "../img/logo_dark.svg";
import LaunchIcon from "@mui/icons-material/Launch";
import logoGit from "../img/logoGit.png";
import HtmlIcon from "@mui/icons-material/Html";
import reactAdminIco from "../img/reactAdminIco.svg";
import { AnimatedSection } from "../utils/AnimatedSection";

const skillsNames = [
  "Material UI",
  "Redux",
  "React",
  "TypeScript",
  "JavaScript",
  "Git",
  "CSS",
  "SCSS",
  "HTML",
  "REST API",
  "React Hooks",
  "Redux Toolkit",
  "React Router",
  "Recharts",
  "react-admin",
];
const iconSkills = [
  materialIco,
  reduxIco,
  reactLogo,
  typeScript,
  jsIco,
  logoGit,
  CssIcon,
  logoScss,
  HtmlIcon,
  icoApi,
  reactLogo,
  reduxIco,
  reactRouterIco,
  LaunchIcon,
  reactAdminIco,
];
const boxsColors = [""];

export const MySkills = () => {
  return (
    <AnimatedSection>
      <div className="my-skills">
        <h1>My Skills</h1>
        <div className="my-skills__skills-grid">
          <div className="my-skills__skill-item">
            {skillsNames.map((name, index) => {
              return (
                <div className="my-skills__skill-box">
                  {name}
                  <img
                    src={iconSkills[index]}
                    alt="skill ico"
                    style={{ width: "40px" }}
                  />
                </div>
              );
            })}
            <button onClick={() => window.history.back()}>Go Back</button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
