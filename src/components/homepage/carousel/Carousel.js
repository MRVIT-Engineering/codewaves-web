import classes from "../../../assets/css/Homepage.module.css";
import CarouselLine from "./CarouselLine";
import { Headline } from "../../ui-elements/common/Headline";

export default function Carousel() {
  return (
    <div className={classes.Carousel}>
      <Headline>
        Learn by doing<span className="dot">.</span>
      </Headline>
      <div className={classes.Line}>
        <CarouselLine></CarouselLine>
        <CarouselLine></CarouselLine>
      </div>
    </div>
  );
}
