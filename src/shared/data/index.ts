import { Course, SponsorsPartners, TeamMembers } from "../types";

export const teamMembers: TeamMembers[] = [
  {
    names: "Theoneste NDAYISENGA",
    title: "Founder & CEO",
    profileImage: "https://dda.co.rw/images/Theoneste.png",
  },
  {
    names: "Francis Kipchoge Yego",
    title: "Board Member",
    profileImage: "/assets/images/francis.jpg",
  },
  {
    names: "Grace Umuhire",
    title: "Director Of Funding and Partnership",
    profileImage: "/assets/images/director.jpg",
  },
  {
    names: "Vedaste NYANDWI",
    title: "Data Science Instructor",
    profileImage: "https://dda.co.rw/images/vedaste.png",
  },
  {
    names: "Geredi NIYIBIZI",
    title: "AI Instructor",
    profileImage: "	https://dda.co.rw/images/gEREDI.png",
  },
  {
    names: "Dr. Innocent NGARUYE",
    title: "Sr. Data Science Instructor",
    profileImage: "	https://dda.co.rw/images/innocent.png",
  },
  {
    names: "Joie Sophia UMUHOZA",
    title: "Marketing Officer",
    profileImage: "	https://dda.co.rw/images/Joiejosepha.jpeg",
  },
  {
    names: "Didier Ngamije",
    title: "Data Analytics Instructor",
    profileImage: "https://dda.co.rw/images/ndamije.png",
  },
];

export const carouselData = [
  {
    title: "Our Accreditations",
    description:
      " Global Nexus Institute is accredited by NCC (UK) to deliver courses in data science, AI, cyber-security, and computer basics, providing globally recognized certifications.",
    videoLink: "https://www.youtube.com/embed/su_vds3i8hA",
  },

  {
    title: "Explore Our Courses",
    description:
      "At Global Nexus Institute, our courses, delivered via IllumiDesk LMS, provide hands-on learning and recognized certifications. With IllumiDesk, access materials, track progress, and complete assignments in a structured environment, backed by NCC (UK) accreditation.",
    videoLink: "https://www.youtube.com/embed/QdaAd4E0gSg",
  },
];

export const sampleFeaturedCourses: Course[] = [
  {
    uuid: "8f1b2e19-3d3f-4740-bb93-d1da991b6969",
    name: "Data Science: Intermediaire",
    slug: "data-science-intermediaire",
    short_intro:
      "Explore advanced topics in data science, including machine learning and statistical analysis, at our intermediate level campus.",
    is_featured: false,
    lesson_count: 21,
    student_count: 11,
    activity_count: 76,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/2.jpg",
    cost: 150,
  },

  {
    uuid: "7d158738-13c2-418f-a149-83035c30210c",
    name: "SQL for Data Analysis",
    slug: "sql-for-data-analysis",
    short_intro:
      "Enhance your data analysis skills! Learn to manipulate, analyze, and visualize data using SQL on our interactive campus.",
    is_featured: false,
    lesson_count: 6,
    student_count: 3,
    activity_count: 56,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/images.jpeg",
    cost: 150,
  },
  {
    uuid: "77d6ff1d-5133-4ef4-822a-9b30c66f6c22",
    name: "Data Skills for Excel Professionals",
    slug: "data-skills-for-excel-professionals",
    short_intro:
      "Master advanced Excel techniques and data skills to boost your professional edge in this comprehensive campus course.",
    is_featured: false,
    lesson_count: 30,
    student_count: 2,
    activity_count: 30,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/alison.jpg",
    cost: 150,
  },
  {
    uuid: "660fac45-d14b-4180-a866-b1807e43adc0",
    name: "Basics Python Data Analysis",
    slug: "basics-python-data-analysis",
    short_intro:
      "Learn Python basics and data analysis techniques. Includes hands-on exercises, real-world examples, and foundational skills.",
    is_featured: false,
    lesson_count: 10,
    student_count: 2,
    activity_count: 66,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/pythonf_for_data_science.png",
    cost: 100,
  },
  {
    uuid: "cbc19e2d-507d-4596-b683-3a8555252489",
    name: "Python Data Analytics",
    slug: "python-data-analytics",
    short_intro:
      "Learn how to use Python for analyzing and visualizing data with this comprehensive course on Python Data Analytics.",
    is_featured: false,
    lesson_count: 6,
    student_count: 1,
    activity_count: 6,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/1682952919031.jpeg",
    cost: 100,
  },
  {
    uuid: "077d3c58-9e6c-43ba-9ee8-a0c1f303fd18",
    name: "Data Analytics With Python and SQL",
    slug: "data-analytics-with-python-and-sql",
    short_intro:
      "Discover the power of data analysis with Python and SQL in this dynamic campus program, unlocking insights and driving informed decisions.",
    is_featured: false,
    lesson_count: 10,
    student_count: 1,
    activity_count: 17,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/1705264155547.jpeg",
    cost: 120,
  },
  {
    uuid: "2aed3935-1808-4f17-bc4e-30dc7d77edcd",
    name: "Data Science: Introduction",
    slug: "data-science-introduction",
    short_intro:
      "Explore the world of data science with this introductory course, covering basic concepts and tools for analyzing and interpreting data.",
    is_featured: false,
    lesson_count: 12,
    student_count: 1,
    activity_count: 12,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/3.jpg",
    cost: 150,
  },
  {
    uuid: "476dacc0-d168-4a9c-9a19-b15a6c61d68b",
    name: "Data Science Basics to Advanced",
    slug: "data-science-basics-to-advanced",
    short_intro:
      "Join our Data Science course! Dive into programming, statistics, and machine learning. Master data analysis to make informed decisions.",
    is_featured: false,
    lesson_count: 11,
    student_count: 1,
    activity_count: 12,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/Data_Science.jpg",
    cost: 160,
  },
  {
    uuid: "1f47909e-36b1-43c6-88dd-6ca53afab755",
    name: "Business Intelligence With PowerBI",
    slug: "business-intelligence-with-powerbi",
    short_intro:
      "Unlock data insights with PowerBI! Learn to visualize, analyze, and make data-driven decisions in our Business Intelligence course.",
    is_featured: false,
    lesson_count: 12,
    student_count: 0,
    activity_count: 16,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/images_1_1.jpeg",
    cost: 150,
  },
  {
    uuid: "103bbba8-731f-412f-bb3d-74e0c6119443",
    name: "Business Data Analytics",
    slug: "business-data-analytics",
    short_intro:
      "Explore powerful tools and techniques to analyze and interpret data for business decision-making at our Business Data Analytics campus.",
    is_featured: false,
    lesson_count: 5,
    student_count: 0,
    activity_count: 2,
    main_image:
      "https://prod-illumidesk-api-media-ueef29.s3.amazonaws.com/campuses/611abe06-3ac9-4a6f-81dc-f2abcb084623/4.jpg",
    cost: 150,
  },
];

export const sampleSponsorPartners: SponsorsPartners[] = [
  {
    title: "Sand Technologies",
    imageUrl: "/assets/images/sandtechnology.jpg",
    content:
      "Global AI solutions company with expertise in enterprise and industrial AI, and data science.",
  },
  {
    title: "ALX Africa",
    imageUrl: "/assets/images/alxventures.jpg",
    content:
      " ALX Africa is one of the largest training platforms for youth on the continent.",
  },
  {
    title: "RMI Institue",
    imageUrl: "/assets/images/rmiinstitute.png",
    content:
      "Rwanda Management Institute enhances skills through training and consultancy services.",
  },
  {
    title: "NCC Education",
    imageUrl: "https://dda.co.rw/images/Hello.png",
    content:
      "NCC Education is a UK-based awarding body that provides internationally recognized qualifications",
  },
  {
    title: "ICT Chamber",
    imageUrl: "/assets/images/ictchamber.png",
    content:
      "The ICT Chamber in Rwanda is a member-based organization focused on advancing (ICT) sector.",
  },
  {
    title: "Osiri University",
    imageUrl: "/assets/images/ositiuniversity.png",
    content:
      "USA Tuition free University that blends Africa philosophy and western education",
  },
];

export const testimonials = [
  {
    name: "",
    photoLink: "",
    content: "",
  },
];
