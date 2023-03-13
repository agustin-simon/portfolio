// dependencies
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
// components
import ObserverAdapter from "../../../../components/observer-adapter/ObserverAdapter";
import SwitchLanguage from "../switch-language/SwitchLanguage";
// styles
import "./SecondarySection.css";

const SecondarySection: React.FC = () => {
  const [activate, setActivate] = useState<boolean>(true);
  const [t] = useTranslation("global");
  const { ref: contRef } = useInView();

  return (
    <ObserverAdapter
      childComp={
        <div className="secondary-section">
          <h2>{t("secondary.about-me")}</h2>

          <div className="text-box" ref={contRef}>
            <div className="switch-box">
              <SwitchLanguage activate={activate} onFunction={setActivate} />
            </div>
            <div className="divider">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>{t("secondary.description")}</p>
          </div>
        </div>
      }
    />
  );
};

export default SecondarySection;
