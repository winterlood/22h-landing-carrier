import style from "./Section.module.scss";

const Section = ({
  children,
  className,
}: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <section className={[style.container, className].join(" ")}>
      <div className={style.inner}>{children}</div>
    </section>
  );
};

export default Section;
