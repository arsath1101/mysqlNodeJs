const mysql=require('mysql');
var connection=mysql.createConnection({
    port:3000,
    host:"localhost",
    user:"root",
    password:"aarsath1101A$4",
    database:"curd"
})

connection.connect((err)=>{
    if(!err)
    {
        console.log("connected");
    }
    else
    console.log(err);

});

module.exports=connection;