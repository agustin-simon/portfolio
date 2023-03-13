import { useTranslation } from "react-i18next";

const [t] = useTranslation("global");

const navData = [
  {
    name: <>{t("nav-items.home")}</>,
    isVisible: false,
  },
  {
    name: "About me",
    isVisible: false,
  },
  {
    name: "Projects",
    isVisible: false,
  },
  {
    name: "Tecnologys",
    isVisible: false,
  },
];

export default navData;
