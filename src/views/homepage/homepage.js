import Hero from "../../components/homepage/Hero";
import HomepageNav from "../../components/navigation/HomepageNav";
import Carousel from "../../components/homepage/carousel/Carousel";
import CoursePreview from "../../components/homepage/course-preview/CoursePreview";
export default function HomepageView() {
  return (
    <>
      <HomepageNav />
      <Hero />
      <Carousel />
      <CoursePreview />
    </>
  );
}
