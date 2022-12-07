import "./TecnoCard.css";
import { IconType } from "react-icons";
import React from "react";

interface Props {
  title: string;
  icon: IconType;
}

const TecnoCard: React.FC<Props> = ({ title, icon }) => {
  const Icon = React.createElement(icon, { size: 40, className: "icon-card" });

  return (
    <div className="tecno-card-container">
      <div className="logo-card">{Icon}</div>
      <div className="tecno-card">{title}</div>
    </div>
  );
};

export default TecnoCard;
