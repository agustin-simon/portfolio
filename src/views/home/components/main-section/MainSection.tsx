// dependencies
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
// styles
import "./MainSection.css";

const MainSection: React.FC = () => {
  const [t] = useTranslation("global");
  const { ref: containerRef } = useInView();

  return (
    <div className="main-section" ref={containerRef}>
      <div className="main-left">
        <h3 className="main-subtitle">{`<${t("first.my-name")}/>`}</h3>
        <h1 className="main-title">AGUSTÍN SIMON</h1>
      </div>
      <div className="main-right">
        <div className="main-img"></div>
      </div>
    </div>
  );
};

export default MainSection;
