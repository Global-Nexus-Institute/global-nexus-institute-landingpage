export interface Course {
  uuid: string; // example: "077d3c58-9e6c-43ba-9ee8-a0c1f303fd18",
  name: string; // example: "Data Analytics With Python and SQL";
  slug: string; // example: "data-analytics-with-python-and-sql";
  short_intro: string; // example: "Discover the power of data analysis with Python and SQL in this dynamic campus program, unlocking insights and driving informed decisions.";
  is_featured: boolean;
  lesson_count: number;
  student_count: number;
  activity_count: number;
  main_image: string;
  cost?: number;
}

export interface TeamMembers {
  names: string;
  title: string;
  profileImage: string;
}

export interface SponsorsPartners{
  title: string;
  imageUrl: string;
  content: string;
}
