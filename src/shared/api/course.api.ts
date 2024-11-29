import { backend, endpoints } from "./config";

export const getCourses = () => backend.get(endpoints.courses);
export const getCourse = (slug: string) =>
  backend.get(`${endpoints.courses}/${slug}`);
