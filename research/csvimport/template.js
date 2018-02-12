var json2csv = require('json2csv');

exports.get = function(req, res) {

   var fields = [
       'id',
       'uwi',
       'long',
       'lat',
       'lease',
       'operator',
       'fake_number'
   ];

   var csv = json2csv({ data: '', fields: fields });

   res.set("Content-Disposition", "attachment;filename=well_locations_with_data.csv");
   res.set("Content-Type", "application/octet-stream");

   res.send(csv);

};