const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        default: []
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    torrent_link: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = User = mongoose.model('courses', CourseSchema);
