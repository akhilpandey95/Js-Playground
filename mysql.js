var db = require('mysql');

var db_connect = db.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'akhil',
  database: 'ghost',

});

db_connect.connect();

var db_query = db_connect.query(
  'select sname,sbranch from student where sid = 103' , function(err,result,fields) {
      if(err) throw err;
      console.log('The Database is');
      console.log(result);
});

db_connect.end();
