import React from "react";
import heroImage from "../../../assets/images/homepage/hero.png";
import classes from "../../../assets/css/Homepage.module.css";
import Button from "../../ui-elements/buttons/PrimaryButton";
import Wrapper from "../../ui-elements/containers/Wrapper";
import { Headline } from "../../ui-elements/common/Headline";

import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

export default function Hero() {
  return (
    <div className={classes.Hero}>
      <Wrapper>
        <div className={classes.Left}>
          <Headline>
            Start learning <br />{" "}
            <span className={classes.TitleSpan}>
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed="80"
                deleteSpeed="70"
                words={[
                  "HTML & CSS",
                  "javascript",
                  "c++ & algorithms",
                  "python",
                  "and much more",
                ]}
              />
            </span>
          </Headline>
          <div className={classes.ButtonWrapper}>
            <Button>get started</Button>
          </div>
        </div>
        <div className={classes.Right}>
          <img className={classes.HeroImage} src={heroImage} alt="Hero." />
        </div>
      </Wrapper>
    </div>
  );
}
