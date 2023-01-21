var express = require('express');
var router = express.Router();
var track = require('../controllers/TrackController.js');
var playlist = require('../controllers/PlaylistController.js');


router.get('/', playlist.list);
router.get('/playlist/:id', playlist.show);

/*
router
    .route("/")
    .get((req, res) => {
        res.render('../views/layouts/library', {layout: false, track: track.list});
    })
    .post((req, res) => {
        res.send("hi post /library")
    })
*/

module.exports = router;
