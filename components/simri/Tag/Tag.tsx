import style from "./Tag.module.scss";

const Tag = ({ children }: { children: JSX.Element | string }) => {
  return <span className={style.container}>{children}</span>;
};

export default Tag;
