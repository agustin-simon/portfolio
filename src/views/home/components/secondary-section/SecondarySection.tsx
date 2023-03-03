import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ObserverAdapter from "../../../../components/observer-adapter/ObserverAdapter";
import SwitchLanguage from "../switch-language/SwitchLanguage";
import "./SecondarySection.css";

const SecondarySection: React.FC = () => {
  const [activate, setActivate] = useState<boolean>(false);
  const { ref: contRef } = useInView();

  return (
    <ObserverAdapter
      childComp={
        <div className="secondary-section">
          <h2>About me</h2>

          <div className="text-box" ref={contRef}>
            <div className="switch-box">
              <SwitchLanguage activate={activate} onFunction={setActivate} />
            </div>
            <div className="divider">
              <div></div>
              <div></div>
              <div></div>
            </div>
            {activate ? (
              <p>
                I am a student of Tecnicatura en Desarrollo de Aplicaciones at
                UNICEN University, and my goal is to develop the knowledge
                acquired during my studies and continue learning about the
                profession.
              </p>
            ) : (
              <p>
                Soy estudiante de Tecnicatura en Desarrollo de Aplicaciones
                Informáticas en la universidad UNICEN, y mi objetivo es
                desarrollar los conocimientos adquiridos durante la carrera y
                continuar aprendiendo sobre la profesión.
              </p>
            )}
          </div>
        </div>
      }
    />
  );
};

export default SecondarySection;
