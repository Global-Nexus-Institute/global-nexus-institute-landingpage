import { backend, endpoints } from "./config";

export const getCourses = () => backend.get(endpoints.courses);
