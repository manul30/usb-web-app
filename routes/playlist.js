var express = require('express');
var router = express.Router();
var track = require('../controllers/TrackController.js');

router.get('/', track.list);

/*
router
    .route("/")
    .get((req, res) => {
        //res.removeHeader();
        res.render('../views/layouts/trackHistory', {layout: false});
    })
    .post((req, res) => {
        res.send("hi post /track")
    })

*/
module.exports = router;

