var express = require('express');
var router = express.Router();
var track = require('../controllers/TrackController.js');

router.get('/', track.listUpload);


router
    .route("/")
    .get((req, res) => {
        //res.removeHeader();
        res.render('../views/layouts/upload', {layout: false});
    })
    .post((req, res) => {
        res.send("hi post /upload")
    })


module.exports = router;

