var mongoose = require('mongoose');
var Track = require("../models/Track");

var trackController = {};


trackController.list = function(req, res){

   Track.find({}).exec(function(err, tracks){
   if( err ){ console.log('Error: ', err); return; }
   console.log("The INDEX");
   res.render('../views/layouts/library', {tracks:
   tracks, titulo:'library'} );

   });
};

trackController.listTrack = function(req, res){

   Track.find({}).exec(function(err, tracks){
   if( err ){ console.log('Error: ', err); return; }
   console.log("The INDEX");
   res.render('../views/layouts/trackHistory', {tracks:
   tracks, titulo:'track history'} );

   });
};

trackController.listUpload = function(req, res){

   Track.find({}).exec(function(err, tracks){
   if( err ){ console.log('Error: ', err); return; }
   console.log("The INDEX");
   res.render('../views/layouts/upload', {tracks:
   tracks, titulo:'upload'} );

   });
};



trackController.show = function(req, res){
   Track.findOne({_id: req.params.id}).exec(function(err, track){
      if( err ){ console.log('Error: ', err); return; }

   res.render('../views/layouts/show', {track: track} );
   });

};


trackController.create = function(req, res){
 res.render('../views/layouts/create');
};
trackController.save = function(req, res){
 var track = new Track( req.body );

 track.save(function(err){
 if( err ){ console.log('Error: ', err); return; }

 console.log("Successfully created a track. :)");
 res.redirect("/layouts/show/"+track._id);
 });
};
trackController.edit = function(req, res) {
 Track.findOne({_id: req.params.id}).exec(function (err, track)
{
 if (err) { console.log("Error:", err); return; }

 res.render("../views/layouts/edit", {track: track});

 });
};
trackController.update = function(req, res){
 Track.findByIdAndUpdate( req.params.id, {$set: {

    codigo: req.body.codigo,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
    stock: req.body.stock,
    marca: req.body.marca,
    modelo: req.body.modelo,
    categoria: req.body.categoria,
    fecha_produccion: req.body.fecha_produccion
 }}, { new: true },
 function( err, track){
 if( err ){
 console.log('Error: ', err);
 res.render('../views/layouts/edit', {track: req.body}
);
 }

 console.log( track );

 res.redirect('/layouts/show/' + track._id);

 });
};
trackController.delete = function(req, res){

 Track.remove({_id: req.params.id}, function(err){
 if( err ){ console.log('Error: ', err); return; }

 console.log("Track deleted!");
 res.redirect("/layouts");
 });

};
module.exports = trackController;