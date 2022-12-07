import "./LanguagesItemsList.css";
import LanguageItem from "./languages-item/LanguageItem";
import { IconType } from "react-icons";

interface Item {
  icon: IconType;
  title: string;
}

interface Props {
  list: Item[];
}

const LanguagesItemsList: React.FC<Props> = ({ list }) => {
  return (
    <div className="languages-items-list">
      {list &&
        list.map((item, index) => {
          return (
            <LanguageItem icon={item.icon} title={item.title} key={index} />
          );
        })}
    </div>
  );
};

export default LanguagesItemsList;
