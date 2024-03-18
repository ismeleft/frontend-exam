import SearchBar from "../SearchBar/SearchBar";
import style from "./Info.module.sass";

const Info = () => {
  return (
    <div className={style.info}>
      <div className={style.titleBlock}>
        <div className={style.titleDeco}></div>
        <div className={style.title}>適合前端工程師的好工作</div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Info;
