//styles
import "./ThirdSection.css";
//components
import PageBtn from "../page-btn/PageBtn";
import firstWeb from "../../../../assets/images/web01.png";
import LanguagesItemsList from "../languages-items-list/LanguagesItemsList";
import itemsData from "../languages-items-list/items-data/ItemsData";
import itemsDataTwo from "../languages-items-list/items-data/ItemsDataTwo";
//assets
import phones from "../../../../assets/images/phones.png";
import ObserverAdapter from "../../../../components/observer-adapter/ObserverAdapter";
import { useTranslation } from "react-i18next";

const ThirdSection: React.FC = () => {
  const [t] = useTranslation("global");

  return (
    <div className="third-container">
      <div className="title-box">
        <div className="bg-title"></div>
        <h2>{t("third.title")}</h2>
        <h4>{t("third.subtitle")}</h4>
      </div>

      <ObserverAdapter
        childComp={
          <div className="web-example-box-top">
            <div className="web-image-l">
              <img src={firstWeb} />
            </div>
            <div className="web-image-r">
              <p>{t("third.first-project")}</p>
              <LanguagesItemsList list={itemsData} />
              <PageBtn link="https://agustin-simon.github.io/e-commerce-web/" />
            </div>
          </div>
        }
      />
      <ObserverAdapter
        childComp={
          <div className="web-example-box-bot">
            <div className="web-image-l">
              <img src={phones} />
            </div>
            <div className="web-image-r">
              <p>{t("third.secondary-project")}</p>
              <LanguagesItemsList list={itemsDataTwo} />
              <PageBtn link="https://github.com/agustin-simon/ionic-node-app" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ThirdSection;
