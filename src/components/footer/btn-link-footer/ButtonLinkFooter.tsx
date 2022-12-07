import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  link: string;
  icon: IconType;
}

const ButtonLinkFooter: React.FC<Props> = ({ link, icon }) => {
  return (
    <a href={link} target="_blank">
      <button>{React.createElement(icon, { size: 40 })}</button>
    </a>
  );
};

export default ButtonLinkFooter;
