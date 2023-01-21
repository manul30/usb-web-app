var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TrackSchema = new Schema({
 artwork: {type: String, required: true},
 track: {type: String, required: true},
 artist: {type: String, required: true},
 album: {type: String, required: true},
 genre: {type: String, required: true},
 bpm: {type: String, required: true, max:12},
 rating: {type: String, required: true},
 time: {type: String, required: true, max: 12},
 key: {type: String, required: true, max: 10},
 dateAdded: {type: String, required: true}
});
module.exports = mongoose.model('Track', TrackSchema);