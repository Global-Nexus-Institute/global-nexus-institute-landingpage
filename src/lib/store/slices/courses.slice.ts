import { getCourse, getCourses } from "@/shared/api/course.api";
import { Course } from "@/shared/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CourseState {
  courses: Course[];
  courseDetail: Course | null;
  loading: boolean;
  courseErrorMessage: string;
  courseSuccessMessage: string;
}

const initialState: CourseState = {
  courses: [],
  courseDetail: null,
  loading: false,
  courseErrorMessage: "",
  courseSuccessMessage: "",
};

export const getCoursesThunk = createAsyncThunk(
  "courses/getCourses",
  async () => {
    try {
      const res = await getCourses();
      return res.data;
    } catch (err: any) {
      return err.response.data ?? err.response.message;
    }
  },
);

export const getCourseThunk = createAsyncThunk(
  "courses/getCourse",
  async (slug: string) => {
    try {
      const res = await getCourse(slug);
      return res.data;
    } catch (err: any) {
      return err.response.data ?? err.response.message;
    }
  },
)

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCoursesThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.courseErrorMessage = action.payload.error;
        } else {
          state.courses = action.payload;
        }
      })
      .addCase(getCoursesThunk.rejected, (state) => {
        state.loading = false;
      });

      // get course
      builder
      .addCase(getCourseThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourseThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.error) {
          state.courseErrorMessage = action.payload.error;
        } else {
          state.courseDetail = action.payload;
        }
      })
      .addCase(getCourseThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default courseSlice.reducer;
