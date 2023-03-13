import { useTranslation } from "react-i18next";
import "./SwitchLanguage.css";

interface Props {
  activate: boolean;
  onFunction: Function;
}

const SwitchLanguage: React.FC<Props> = ({ activate, onFunction }) => {
  const [t, i18n] = useTranslation("global");

  const handleClick = () => {
    onFunction(!activate);
    if (activate) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  };

  return (
    <div
      className={
        activate
          ? "switch-container cont text-selection-disable"
          : "switch-container-end cont text-selection-disable"
      }
      onClick={handleClick}
    >
      <h4>ENG | ESP</h4>
      <div
        className={
          activate ? "switch-item switch-anim-inv" : "switch-item switch-anim"
        }
      ></div>
    </div>
  );
};

export default SwitchLanguage;
