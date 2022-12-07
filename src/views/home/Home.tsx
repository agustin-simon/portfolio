//styles
import "./Home.css";
//components
import FourthSection from "./components/fourth-section/FourthSection";
import MainSection from "./components/main-section/MainSection";
import SecondarySection from "./components/secondary-section/SecondarySection";
import ThirdSection from "./components/third-section/ThirdSection";
import NavBar from "../../components/nav-bar/NavBar";
//libraries
import { useInView } from "react-intersection-observer";
import { MutableRefObject, useRef } from "react";
//hooks
import { useScrollTo } from "../../hooks/useScrollTo";
import Divider from "../../components/divider/Divider";

//models
interface Item {
  refElem: MutableRefObject<HTMLInputElement | null>;
  name: string;
  isVisible: boolean;
}

const Home: React.FC = () => {
  const [mainRef, firstIsVisible] = useInView({
    root: null,
    rootMargin: "-22%",
    // rootMargin: "-238px",
    // threshold: [0, 0.2],
  });

  const [secondRef, secondIsVisible] = useInView({
    root: null,
    threshold: [0.4],
    rootMargin: "-4%",
  });

  const [thirdRef, thirdIsVisible] = useInView({
    root: null,
    threshold: [0.5],
    // rootMargin: "-125px",
    // threshold: [0.2],
  });

  const [fourthRef, fourthIsVisible] = useInView({
    // rootMargin: "-275px",
    // threshold: [0.2],
  });

  const elemMainRef = useRef<HTMLInputElement | null>(null);
  const mainObRef = useScrollTo(elemMainRef, mainRef);

  const elemSecondRef = useRef<HTMLInputElement | null>(null);
  const secondObRef = useScrollTo(elemSecondRef, secondRef);

  const elemThirdRef = useRef<HTMLInputElement | null>(null);
  const thirdObRef = useScrollTo(elemThirdRef, thirdRef);

  const elemFourthRef = useRef<HTMLInputElement | null>(null);
  const fourthObRef = useScrollTo(elemFourthRef, fourthRef);

  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const objs: Item[] = [
    {
      refElem: elemMainRef,
      name: "Home",
      isVisible: firstIsVisible,
    },
    {
      refElem: elemSecondRef,
      name: "About me",
      isVisible: secondIsVisible,
    },
    {
      refElem: elemThirdRef,
      name: "Projects",
      isVisible: thirdIsVisible,
    },
    {
      refElem: elemFourthRef,
      name: "Tecnologys",
      isVisible: fourthIsVisible,
    },
  ];

  return (
    <>
      <NavBar items={objs} scrollTo={scrollTo} />
      <div className="home-container">
        <div className="nav-place"></div>
        <div className="screen-place">
          <div ref={mainObRef}>
            <MainSection />
          </div>
          <div ref={secondObRef}>
            <SecondarySection />
          </div>
          <div ref={thirdObRef}>
            <ThirdSection />
          </div>
          <Divider />
          <div ref={fourthObRef}>
            <FourthSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
