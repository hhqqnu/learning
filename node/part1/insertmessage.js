var sql = require('mssql');
var util = require('./util');
var rtf = require('rtf');
var rtf2html = require('rtf2html');
var config = {
  user:'sa',
  password:'1',
  server:'192.168.10.70\\sqlexpress',
  database:'SLcsLog'
};

sql.connect(config).then(function(){
  var request = new sql.Request();
    request.query('SELECT * FROM Messages m WHERE (m.FromId=3 OR m.FromId=9) AND (m.ToId=3 OR m.ToId=9)').then(function(recordset) {
        //console.dir(recordset);
        for (var i = recordset.length - 1; i >= 0; i--) {
          var record = recordset[i];
          if (record.ContentTypeId==2) {
            console.log(record.Body);
            break;
          }
        }
    }).catch(function(err) {
        console.error(err);
    });
}).catch(function(err){
  console.error(err);
});

