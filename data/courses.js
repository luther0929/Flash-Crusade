export const courses = [
    {
        id: 1,
        title: "Programming Principles",
        code: "CS101",
        image: require('../assets/images/courseImages/studyImage1.png'),
    },
    {
        id: 2,
        title: "Data Structures",
        code: "CS201",
        image: require('../assets/images/courseImages/studyImage2.png'),
    },
    {
        id: 3,
        title: "Web Development",
        code: "CS301",
        image: require('../assets/images/courseImages/studyImage3.png'),
    },
    {
        id: 4,
        title: "Database Systems",
        code: "CS401",
        image: require('../assets/images/courseImages/studyImage4.png'),
    },
    {
        id: 5,
        title: "Cybersecurity",
        code: "CS501",
        image: require('../assets/images/courseImages/studyImage5.png'),
    },
    {
        id: 6,
        title: "Algorithms",
        code: "CS601",
        image: require('../assets/images/courseImages/studyImage6.png'),
    }
];

// Helper function to get course by ID
export const getCourseById = (id) => {
    return courses.find(course => course.id === id);
};
