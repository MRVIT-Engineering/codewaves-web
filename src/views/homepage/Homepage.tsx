import Hero from "../../components/homepage/hero/Hero";
import HomepageNav from "../../components/navigation/HomepageNav";
import Carousel from "../../components/homepage/carousel/Carousel";
import CoursePreview from "../../components/homepage/course-preview/CoursePreview";
import PlaygroundPreview from "../../components/homepage/playground-preview/PlaygroundPreview";
import GetStarted from "../../components/homepage/get-started/GetStarted";
import Contact from "../../components/homepage/contact/Contact";

export default function HomepageView() {
  return (
    <>
      <HomepageNav />
      <Hero />
      <Carousel />
      <CoursePreview />
      <PlaygroundPreview />
      <GetStarted />
      <Contact />
    </>
  );
}
