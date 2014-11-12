var user_input = require('readline');
var db = require('mysql');
var query_input = user_input.createInterface({
      input: process.stdin,
      output: process.stdout
});
var read = user_input.createInterface({
      input: process.stdin,
      output: process.stdout
});

// These details are dependent upon the details of your host and Database
var db_connect = db.createConnection({
  host: 'localhost',
  database: 'ghost',
  user: 'root',
  password: 'akhil'
});

db_connect.connect();
/* We ask the user over here as to what he wants to do
    > If it is case 1 then it is create operation
    > If it is case 2 then it is insert operation
    > If it is case 3 then it is delete/drop operation
*/
console.log("Welcome to the Automated Database Operations");
console.log("\n In order to create press 1 \n ");
console.log("\n In order to insert press 2 \n ");
console.log("\n In order to drop/delete press 3");
read.question("Select your option",function(answer){
    console.log("so you have selected to perform ",answer," operation");
    read.close();

query_input.question("enter the sid , sname and sbranch",function(ans1,ans2,ans3){
    var db_insert = {sid: ans1, sname: ans2 , sbranch: ans3};
    var query = db_connect.query(
      'insert into student set ? ', db_insert , function(err,res){
          if(err) throw err;
          console.log("\n Insertion Successfull");
          console.log(res);
      });
    query_input.close();
  });
});


var query = db_connect.query(
  'select * from student ',function(err,result) {
    if(err)
      throw err;
    console.log('\n');
    console.log(result);
  });


db_connect.end();
