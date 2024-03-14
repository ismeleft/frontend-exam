import React from "react";
import style from "../Banner/Banner.module.sass";

const Banner = () => {
  return (
    <div className={style.banner}>
      <img
        src="/images/Background-01.png"
        width={"100%"}
        height={"823px"}
        alt="banner-background"
        className="bannerBackground"
      ></img>
      <img
        src="/images/Character-01-White.png"
        width={"1097px"}
        height={"823px"}
        alt="banner-character-white"
        className={style.bannerCharacterWhite}
      />
      <img
        src="/images/Character-01.png"
        width={"1097px"}
        height={"823px"}
        alt="banner-character"
        className={style.bannerCharacter}
      ></img>
      <img
        src="/images/LeftEye-01.png"
        width={"39.82px"}
        height={"32.28px"}
        alt="banner-character-left-eye"
        className={style.bannerCharacterLeftEye}
      ></img>
      <img
        src="/images/RightEye-01.png"
        width={"39.82px"}
        height={"32.28px"}
        alt="banner-character-right-eye"
        className={style.bannerCharacterRightEye}
      ></img>
      <img
        src="/images/Logo-01.png"
        width={"540px"}
        height={"323px"}
        alt="banner-logo"
        className={style.bannerLogo}
      ></img>
    </div>
  );
};

export default Banner;
