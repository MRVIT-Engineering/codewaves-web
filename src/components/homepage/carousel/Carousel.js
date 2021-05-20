import classes from "../../../assets/css/Homepage.module.css";
import CarouselLine from "./CarouselLine";

export default function Carousel() {
  return (
    <div className={classes.Carousel}>
      <h1 className="title">
        Learn by doing<span className="dot">.</span>
      </h1>
      <div className={classes.Line}>
        <CarouselLine></CarouselLine>
        <CarouselLine></CarouselLine>
      </div>
    </div>
  );
}
