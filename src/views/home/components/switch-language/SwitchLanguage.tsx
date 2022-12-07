import "./SwitchLanguage.css";

interface Props {
  activate: boolean;
  onFunction: Function;
}

const SwitchLanguage: React.FC<Props> = ({ activate, onFunction }) => {
  return (
    <div
      className={activate ? "switch-container" : "switch-container-end"}
      onClick={() => onFunction(!activate)}
    >
      <div className="switch-item"></div>
    </div>
  );
};

export default SwitchLanguage;
