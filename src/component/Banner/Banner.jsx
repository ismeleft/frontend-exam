import React, { useRef, useState } from "react";
import style from "../Banner/Banner.module.sass";

const Banner = () => {
  // 眼睛隨游標移動
  const [eyeStyle, setEyeStyle] = useState({});
  const bannerRef = useRef();

  const handleMouseMove = event => {
    if (bannerRef.current) {
      const { left, width } = bannerRef.current.getBoundingClientRect();
      const x = (event.clientX - left) / width;

      const eyeMove = 20;
      const moveX = (x - 1) * eyeMove;

      setEyeStyle({
        transform: `translate(${moveX}px)`
      });
    }
  };

  return (
    <div className={style.banner} ref={bannerRef} onMouseMove={handleMouseMove}>
      <img
        src="/images/Background-01.png"
        width={"100%"}
        height={"823px"}
        alt="banner-background"
        className="bannerBackground"
      ></img>
      <img
        src="/images/Character-01-White.png"
        alt="banner-character-white"
        className={style.bannerCharacterWhite}
      />
      <img
        src="/images/Character-01.png"
        alt="banner-character"
        className={style.bannerCharacter}
      ></img>
      <img
        src="/images/LeftEye-01.png"
        alt="banner-character-left-eye"
        className={style.bannerCharacterLeftEye}
        style={eyeStyle}
      ></img>
      <img
        src="/images/RightEye-01.png"
        alt="banner-character-right-eye"
        className={style.bannerCharacterRightEye}
        style={eyeStyle}
      ></img>
      <img
        src="/images/Logo-01.png"
        alt="banner-logo"
        className={style.bannerLogo}
      ></img>
    </div>
  );
};

export default Banner;
