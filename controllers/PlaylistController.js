var mongoose = require('mongoose');
const mongo = require('mongodb');

var Playlist = require("../models/Playlist");
var playlistController = {};
var Track = require("../models/Track");
var trackController = {};

playlistController.list = function(req, res){

   Playlist.find({}).exec(function(err, playlists){
   if( err ){ console.log('Error: ', err); return; }
   console.log("The playlist");
   Track.find({}).exec(function(err, tracks){
    if( err ){ console.log('Error: ', err); return; }
    res.render('../views/layouts/library', {
        playlists: playlists, 
        tracks: tracks, 
        titulo:'library'});
    });
   });
};

playlistController.show = function(req, res){
    Playlist.findOne({_id: req.params.id}).exec(function(err, playlist){
       if( err ){ console.log('Error: ', err); return; }
        var tracks = [];
       for (const i in playlist['tracks']){
        Track.findById(mongo.ObjectId(playlist['tracks'][i])).then(track => {
            tracks.push(track);
          });
       }
       res.render('../views/layouts/playlist', {playlist: playlist, tracks: tracks} );
    });
};
 
module.exports = playlistController;
