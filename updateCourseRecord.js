const mongoose = require('mongoose');
const keys = require('./config/keys');
const Course = require('./models/Course');
const fs = require('fs');


mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
    .then(() => console.log('connected to databse...'))
    .catch(() => console.log('could not connect to database...'));

const data = JSON.parse(fs.readFileSync('courses_final_copy_1.json', 'utf8'));

// console.log(JSON.stringify(data, null, 4));

const final_array = [];

for (course of data) {
    // console.log(course.torrent_link != "None");
    course.torrent_link != "None" ? final_array.push(course) : null;
}
final_array.reverse();
const newArray = final_array.map((course, index) => {
    return {...course, count: index + 1};
});
newArray.sort();
let removeDuplicates = {};
newArray.map(el =>{
    removeDuplicates[el.title] = el
    // console.log(el)
});

console.log(Object.keys(removeDuplicates).length);

// newArray.map(x => console.log(x));

// for (course in removeDuplicates) {
//             // console.log(course);
//             console.log(removeDuplicates[course]);
//         }

const putRecords = () => {
    for (course in removeDuplicates) {
        // console.log(course);
        new Course({
            ...removeDuplicates[course]
        }).save().then(crs => console.log(crs)).catch(err => console.log(err));
    }
};
putRecords();
// //
// Course.find({title: 'The Complete Node.js Developer Course (2nd Edition)'}).then(courses => {
//     console.log(courses.length);
// }).catch(err => console.log(err));
