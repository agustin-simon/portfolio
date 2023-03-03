import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./ObserverAdapter.css";

interface Props {
  childComp?: React.ReactNode;
}

const ObserverAdapter: React.FC<Props> = ({ childComp }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView) {
      setLoaded(true);
    }
  }, [loaded, inView]);

  return (
    <div
      ref={ref}
      className={
        loaded ? "fadeInAnim observer-container-before" : "observer-container"
      }
    >
      {loaded ? childComp : ""}
    </div>
  );
};

export default ObserverAdapter;
