import { getCoursesThunk } from "@/lib/store/slices/courses.slice";
import { useAppDispatch } from "@/lib/store/store.hooks";
export const useCourses = () => {
  const dispatch = useAppDispatch();
  const getCourses = async () => {
    await dispatch(getCoursesThunk());
  };

  return { getCourses };
};
