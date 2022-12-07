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

const ThirdSection: React.FC = () => {
  return (
    <div className="third-container">
      <div className="title-box">
        <div className="bg-title"></div>
        <h2>PROJECTS</h2>
        <h4>P e r s o n a l s</h4>
      </div>

      <div className="web-example-box-top">
        <div className="web-image-l">
          <img src={firstWeb} />
        </div>
        <div className="web-image-r">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            soluta quis rem, magnam expedita nihil dolorem tenetur obcaecati?
            Exercitationem eveniet, adipisci perferendis ipsa temporibus
            consequuntur.
          </p>
          <LanguagesItemsList list={itemsData} />
          <PageBtn link="https://agustin-simon.github.io/e-commerce-web/" />
        </div>
      </div>

      <div className="web-example-box-bot">
        <div className="web-image-l">
          <img src={phones} />
        </div>
        <div className="web-image-r">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            soluta quis rem, magnam expedita nihil dolorem tenetur obcaecati?
            Exercitationem eveniet, adipisci perferendis ipsa temporibus
            consequuntur.
          </p>
          <LanguagesItemsList list={itemsDataTwo} />
          <PageBtn link="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
