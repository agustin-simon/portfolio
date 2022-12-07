import "./Footer.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ButtonLinkFooter from "./btn-link-footer/ButtonLinkFooter";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="nav-space"></div>
      <div className="footer-social">
        <ButtonLinkFooter
          link={"https://www.linkedin.com/in/agustin-simon/"}
          icon={AiFillLinkedin}
        />
        <ButtonLinkFooter
          link={"https://github.com/agustin-simon"}
          icon={AiFillGithub}
        />
      </div>
    </div>
  );
};

export default Footer;
