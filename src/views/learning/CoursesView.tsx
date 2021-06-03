import { useEffect, useState } from "react";
import CoursesList from "../../components/courses/CourseLibrary";

export const CoursesView = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <h2>This is the course library</h2>
      {/* <CoursesList loading={loading}></CoursesList> */}
    </>
  );
};
