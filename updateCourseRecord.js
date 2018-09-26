const mongoose = require('mongoose');
const keys = require('./config/keys');
const Course = require('./models/Course');
const fs = require('fs');


mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('connected to databse...'))
    .catch(() => console.log('could not connect to database...'));

// const data = JSON.parse(fs.readFileSync('courses_final_copy_1.json', 'utf8'));

// console.log(JSON.stringify(data, null, 4));

// const final_array = [];
//
// for (course of data) {
//     // console.log(course.torrent_link != "None");
//     course.torrent_link != "None" ? final_array.push(course) : null;
// }
// final_array.reverse();
// const newArray = final_array.map((course, index) => {
//     return {
//         ...course,
//         count: index + 1
//     }
// });
//
// // newArray.map(x => console.log(x));
//
//
// const putRecords = () => {
//     for (course of newArray) {
//         // console.log(course);
//         new Course({
//             ...course
//         }).save().then(crs => console.log(crs)).catch(err => console.log(err));
//     }
// };
// putRecords();
//
Course.find({}, null, {limit: 10, sort: {count: -1}}).then(courses => courses.map(course => console.log(course))).catch(err => console.log(err));
