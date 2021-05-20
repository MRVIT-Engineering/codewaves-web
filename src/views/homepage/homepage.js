import Hero from "../../components/homepage/Hero";
import HomepageNav from "../../components/navigation/HomepageNav";
import Carousel from "../../components/homepage/carousel/Carousel";

export default function HomepageView() {
  return (
    <>
      <HomepageNav />
      <Hero />
      <Carousel />
    </>
  );
}
