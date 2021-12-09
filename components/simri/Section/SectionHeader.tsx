import style from "./SectionHeader.module.scss";

const SectionHeader = ({
  question,
  head_list,
}: {
  question: string;
  head_list: string[];
}) => {
  return (
    <div className={style.container}>
      <div>
        <p>{question}</p>
        {head_list.map((head, idx) => (
          <h1 key={`head${idx}`}>{head}</h1>
        ))}
      </div>
    </div>
  );
};

SectionHeader.defaultProps = {
  head_list: [],
};

export default SectionHeader;
