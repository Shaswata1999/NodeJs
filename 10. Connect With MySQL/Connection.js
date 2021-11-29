let mysql = require('mysql');
let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9261',
    database : 'db',
});
con.connect(function(error) {
    if(error) {
        return console.error('error: '+error.message);
    }
    console.log('connected....');
});
