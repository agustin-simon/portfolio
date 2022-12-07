import "./PageBtn.css";

interface Props {
  link: string;
}

const PageBtn: React.FC<Props> = ({ link }) => {
  return (
    <a href={link} target="_blank" className="btn-aref">
      <button className="btn-page-container">Ver</button>
    </a>
  );
};

export default PageBtn;
