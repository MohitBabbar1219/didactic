const passport = require('passport');
const router = require('express').Router();
const mongoose = require('mongoose');

const Course = mongoose.model('courses');

router.get('/page/:pgNum', (req, res) => {
    Course.find({}, ['title', 'id', 'img', 'category'], {
        skip: (parseInt(req.params.pgNum) - 1) * 10,
        limit: 10,
        sort: { count: -1 }
    }).then(courses => res.status(200).json(courses)).catch(err => res.status(400).send(err));
});

router.get('/:title', (req, res) => {
    Course.findOne({title: req.params.title}).then(course => res.status(200).json(course)).status(400).catch(err => res.send(err));
});

module.exports = router;