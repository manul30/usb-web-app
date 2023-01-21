var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlaylistSchema = new Schema({
 usb: {type: String, required: true},
 name: {type: String, required: true},
 tracks: {type: Array, required: true},
});
module.exports = mongoose.model('Playlist', PlaylistSchema);