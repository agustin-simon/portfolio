import React from "react";
import { IconType } from "react-icons";
import "./LanguageItem.css";

interface Props {
  icon: IconType;
  title: string;
}

const LanguageItem: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="languages-item">
      {React.createElement(icon, { size: 20 })}
      {title}
    </div>
  );
};

export default LanguageItem;
