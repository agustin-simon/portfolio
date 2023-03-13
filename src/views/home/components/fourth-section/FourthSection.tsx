import TecnoCard from "../../../../components/tecno-card/TecnoCard";
import { FaReact, FaGithub } from "react-icons/fa";
import { DiJavascript1, DiJava, DiHtml5, DiPhp } from "react-icons/di";
import {
  SiTypescript,
  SiRedux,
  SiCsswizardry,
  SiNodedotjs,
  SiJira,
} from "react-icons/si";
import "./FourthSection.css";
import ObserverAdapter from "../../../../components/observer-adapter/ObserverAdapter";
import { useTranslation } from "react-i18next";

const FourthSection: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <ObserverAdapter
      childComp={
        <div className="fourth-section">
          <div className="title-box">
            <div className="bg-title"></div>
            <h2>{t("fourth.title")}</h2>
          </div>

          <div className="tecno-list">
            <TecnoCard title={"React JS"} icon={FaReact} />
            <TecnoCard title={"Typescript"} icon={SiTypescript} />
            <TecnoCard title={"Java"} icon={DiJava} />
            <TecnoCard title={"Javascript"} icon={DiJavascript1} />
            <TecnoCard title={"Redux"} icon={SiRedux} />
            <TecnoCard title={"Node Js"} icon={SiNodedotjs} />
            <TecnoCard title={"CSS"} icon={SiCsswizardry} />
            <TecnoCard title={"Html"} icon={DiHtml5} />
            <TecnoCard title={"Php"} icon={DiPhp} />
            <TecnoCard title={"Jira"} icon={SiJira} />
            <TecnoCard title={"Github"} icon={FaGithub} />
          </div>
        </div>
      }
    />
  );
};

export default FourthSection;
