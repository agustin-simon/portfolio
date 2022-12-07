import "./ProjectCard.css";
import { AiOutlineCaretUp } from "react-icons/ai";

const ProjectCard: React.FC = () => {
  return (
    <div className="project-card-container">
      <div className="img-card-box"></div>
      <div className="title-card">
        <AiOutlineCaretUp className="icon-top" />
        <div className="tecno-items">
          <ul>
            <li>React JS</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Chakra UI</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
