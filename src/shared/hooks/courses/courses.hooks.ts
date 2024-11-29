import { getCoursesThunk, getCourseThunk } from "@/lib/store/slices/courses.slice";
import { useAppDispatch } from "@/lib/store/store.hooks";
export const useCourses = () => {
  const dispatch = useAppDispatch();
  const getCourses = async () => {
    await dispatch(getCoursesThunk());
  };
  const getCourse = async (slug: string) => {
    await dispatch(getCourseThunk(slug));
  };

  return { getCourses, getCourse };
};
