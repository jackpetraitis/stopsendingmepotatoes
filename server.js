console.log('this script does something at the very least');
var mysql = require('mysql'),
    express = require('express'),
    http = require('http'),
    app = express(),
	  bodyParser = require('body-parser');
app.use(bodyParser.json());
var server = http.createServer(app).listen(9001);

console.log('potato api listening on port 9001');
var connection = mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'potato',
        password : 'sweetVictory0',
        database : 'stopSending'
    }
);

app.get('/potatos', function(req,res){
	console.log('received GET request for all potatoes');
    var queryString = 'SELECT * FROM recipes';
	
	res.writeHead(200, {'Content-Type': 'application/json'});
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;

        for (var i in rows) {
            res.write(JSON.stringify({i: rows[i]}));
			console.log('Rows: ', rows[i]);
        }
		res.end();
    });
	
});

app.put('/potatos/:id', function(req, res){
   var queryString = 'UPDATE potato_recipes SET '+
       'MealType=' + '"'+req.body.meal.MealType +'",' +
       'RecipeTitle=' + '"'+req.body.meal.RecipeTitle +'",' +
       'PrepTime=' + req.body.meal.PrepTime +',' +
       'CookTime=' + req.body.meal.CookTime +',' +
       'ServingYield=' + req.body.meal.ServingYield +',' +
       'SourceFormat=' + '"'+req.body.meal.SourceFormat +'",' +
       'SourceInformation=' + '"'+req.body.meal.SourceInformation +'",' +
       'Ingredients=' + '"'+req.body.meal.Ingredients +'",' +
       'Instructions=' + '"'+req.body.meal.Instructions +'",' +
       'CookingMethod=' + '"'+req.body.meal.CookingMethod+'" '+
       'WHERE id = ' + req.params.id;
    console.log(queryString);
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
    });
    res.send("Updated recipe with id= "+ req.params.id);
});

app.post('/potatos', function(req, res){
    console.log("request body:");
	console.log(req.body);
	console.log("item:");
	console.log(req.body.MealType);
	
	var querystring = 'insert into recipes values (' +            
		'"'+req.body.MealType +'",' + 
		'"'+req.body.RecipeTitle +'",' +
		'"'+req.body.PrepTime +'",' +
		'"'+req.body.CookTime +'",' +
		'"'+req.body.ServingYield +'",' +
		'"'+req.body.SourceFormat +'",' +
		'"'+req.body.SourceInformation +'",' +
		'"'+req.body.Ingredients +'",' +
		'"'+req.body.CookingMethod+'")';

    connection.query(querystring, function(err, rows, fields) {
        if (err) throw err;
		
    });
    res.send("Posted recipe!");
});

app.delete('/potatos/:id', function(req, res){
    console.log("request params equal");
    console.log(req.params.id);
    var queryString = 'DELETE FROM recipes WHERE id = ' + req.params.id;
    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
    });
    res.send("Deleted recipe with id: " + req.params.id);
});



