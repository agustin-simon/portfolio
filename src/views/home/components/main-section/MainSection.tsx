import { useInView } from "react-intersection-observer";
import "./MainSection.css";

const MainSection: React.FC = () => {
  const { ref: containerRef, inView } = useInView();

  return (
    <div className="main-section" ref={containerRef}>
      <div className="main-left">
        <h3 className="main-subtitle">{"<Hola, mi nombre es />"}</h3>
        <h1 className="main-title">AGUSTÍN SIMON</h1>
      </div>
      <div className="main-right">
        <div className="main-img"></div>
      </div>
    </div>
  );
};

export default MainSection;
