import {
  PromoContainer,
  PromoBg,
  VideoBg,
  PromoContent,
  PromoTitle,
  PromoDescr,
  PromoBtnWrap,
  ArrowForward,
  ArrowRight,
} from "./PromoElements";
import Video from "./../../videos/video.mp4";
import { useState } from "react";
import { Button } from "../ButtonElement";

const Promo = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <PromoContainer>
      <PromoBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </PromoBg>
      <PromoContent>
        <PromoTitle>Virtual Banking Made Easy</PromoTitle>
        <PromoDescr>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </PromoDescr>
        <PromoBtnWrap>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </PromoBtnWrap>
      </PromoContent>
    </PromoContainer>
  );
};

export default Promo;
