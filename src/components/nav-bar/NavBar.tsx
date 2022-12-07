import { MutableRefObject, useEffect } from "react";
import NavIcon from "./icon/NavIcon";
import "./NavBar.css";

interface Item {
  refElem: MutableRefObject<HTMLInputElement | null>;
  name: string;
  isVisible: boolean;
}

interface Props {
  items: Item[];
  scrollTo: Function;
}

const NavBar: React.FC<Props> = ({ items, scrollTo }) => {
  useEffect(() => {}, [items]);

  return (
    <div className="navbar-container">
      <div className="navbar-list">
        {items.map((item, index) => {
          return (
            <button key={index}>
              <h2
                className={item.isVisible ? "active-item" : ""}
                onClick={() => scrollTo(item.refElem)}
              >
                {item.name}
              </h2>
            </button>
          );
        })}
      </div>
      <div className="navbar-btn">
        <NavIcon />
      </div>
    </div>
  );
};

export default NavBar;
