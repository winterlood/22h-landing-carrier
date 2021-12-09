import style from "./Button.module.scss";

const Button = ({
  children,
  onClick,
}: {
  children: JSX.Element | string;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick} className={style.container}>
      <div className={style.inner}>{children}</div>
    </div>
  );
};

export default Button;
