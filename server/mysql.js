var mysql = require('mysql');

var con = mysql.createConnection({
	  host: "127.0.0.1",
	  user: "root",
	  password: "123",
	  database: 'flush',
	  charset : 'utf8mb4'
});

con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
   //const sql = "INSERT INTO users (username, nickname, email, password) VALUES ('mbivol10', 'Marin 😇', 'marinbivol10@gmail.com', 'SuperSecretPassword')"
   const sql = "SELECT * FROM users"
   con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
   });
});


