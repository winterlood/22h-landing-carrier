import ProcessItem from "./ProcessItem";
import style from "./ProcessList.module.scss";

const ProcessList = ({
  process_list,
}: {
  process_list: { head: string; body_list: string[] }[];
}) => {
  return (
    <div className={style.container}>
      {process_list.map((it, idx) => (
        <ProcessItem key={`processItem${idx}`} {...it} />
      ))}
    </div>
  );
};

ProcessList.defaultProps = {
  process_list: [],
};

export default ProcessList;
