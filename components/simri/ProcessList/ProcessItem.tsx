import style from "./ProcessItem.module.scss";

const ProcessItem = ({
  head,
  body_list,
}: {
  head: string;
  body_list: string[];
}) => {
  return (
    <div className={style.container}>
      <div className={style.head}>{head}</div>
      <div className={style.body}>
        {body_list.map((it, idx) => (
          <p key={`body${idx}`}>{it}</p>
        ))}
      </div>
    </div>
  );
};
ProcessItem.defaultProps = {
  body_list: [],
};

export default ProcessItem;
