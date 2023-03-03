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

const ThirdSection: React.FC = () => {
  return (
    <div className="third-container">
      <div className="title-box">
        <div className="bg-title"></div>
        <h2>PROJECTS</h2>
        <h4>P e r s o n a l s</h4>
      </div>

      <ObserverAdapter
        childComp={
          <div className="web-example-box-top">
            <div className="web-image-l">
              <img src={firstWeb} />
            </div>
            <div className="web-image-r">
              <p>
                Proyecto personal sobre el desarrollo de una e-commerce web
                orientado a la venta de productos deportivos. Esta desarrollada
                con ReactJS, tambien utiliza Redux para obtener y guardar los
                productos dentro del estado, ademas TypeScript y el framework
                chakra ui.
              </p>
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
              <p>
                Proyecto personal creado con el objetivo de facilitar el acceso
                de las personas a partidos de futbol, en los cuales puedan
                participar, creas tu partido buscando jugadores o buscas
                partidos que lo necesiten. Esta desarrollado en ReactJS,
                utilizando Ionic para mobile y el framework Chakra Ui.
              </p>
              <LanguagesItemsList list={itemsDataTwo} />
              <PageBtn link="" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ThirdSection;
