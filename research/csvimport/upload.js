var csv = require('fast-csv');
var mongoose = require('mongoose');
var Well = require('./wellData');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var wellFile = req.files.file;
 
    var wells = [];
         
    csv
     .fromString(wellFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         wells.push(data);
     })
     .on("end", function(){
         Well.create(wells, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(wells);
     });
};