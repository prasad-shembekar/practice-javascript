// array and object destructuring

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}

// course.courseInstructor;
// Syntactical Sugar

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

// {
//     "name":"Prasad",
//     "coursename":"js in hindi",
//     "price": "free"
// }


// you can have apis in objects
// [
//     {},
//     {},
//     {},
// ]
