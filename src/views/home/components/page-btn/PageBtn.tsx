import { useTranslation } from "react-i18next";
import "./PageBtn.css";

interface Props {
  link: string;
}

const PageBtn: React.FC<Props> = ({ link }) => {
  const [t] = useTranslation("global");
  return (
    <a href={link} target="_blank" className="btn-aref">
      <button className="btn-page-container">{t("button.title")}</button>
    </a>
  );
};

export default PageBtn;
