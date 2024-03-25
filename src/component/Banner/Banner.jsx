import React, { useRef, useEffect } from "react";
import style from "../Banner/Banner.module.sass";

const Banner = () => {
  const bannerRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const eyeMove = 5;

  const handleMouseMove = event => {
    if (bannerRef.current) {
      const { left, top, width, height } =
        bannerRef.current.getBoundingClientRect();
      const x = (event.clientX - left) / width;
      const y = (event.clientY - top) / height;
      const moveX = (x - 0.5) * eyeMove * 2;
      const moveY = (y - 0.5) * eyeMove * 2;

      if (leftEyeRef.current && rightEyeRef.current) {
        const transformValue = `translate(${moveX}px,${moveY}px)`;
        leftEyeRef.current.style.transform = transformValue;
        rightEyeRef.current.style.transform = transformValue;
      }
    }
  };

  useEffect(() => {
    const bannerElement = bannerRef.current;
    if (bannerElement) {
      bannerElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (bannerElement) {
        bannerElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className={style.banner} ref={bannerRef}>
      <img
        src="/images/Background-01.png"
        width={"100%"}
        height={"auto"}
        alt="banner-background"
        className="bannerBackground"
      ></img>
      <div className={style.character}>
        <img
          src="/images/Character-01-White.png"
          alt="banner-character-white"
          className={style.bannerCharacterWhite}
        />
        <img
          src="/images/Character-01.png"
          alt="banner-character"
          className={style.bannerCharacter}
        />
        <img
          src="/images/LeftEye-01.png"
          alt="banner-character-left-eye"
          className={style.bannerCharacterLeftEye}
          ref={leftEyeRef}
        />
        <img
          src="/images/RightEye-01.png"
          alt="banner-character-right-eye"
          className={style.bannerCharacterRightEye}
          ref={rightEyeRef}
        />
      </div>

      <img
        src="/images/Logo-01.png"
        alt="banner-logo"
        className={style.bannerLogo}
      ></img>
    </div>
  );
};

export default Banner;
