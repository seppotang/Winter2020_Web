//Initialize Express
var express = require('express');
var app = express();

//Initialize Handlebars
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main', extname: '.handlebars'}));
app.set('view engine', 'handlebars');
app.set('port', 9001);

//Initialize bodyParser for POST request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false});
app.use(bodyParser.json());

//Handle GETs
app.get('/',function(req,res){
	//Handle all query results
	var qParams = [];
	for (var p in req.query){
		qParams.push({'name':p,'value':req.query[p]})
	}
	var context = {};
	context.dataList = qParams;
	res.render('get', context);
});

//Handle POSTs
app.post('/', function(req,res){
	//Buffer datum into qParams var for processing
	var qParams = [];
	for (var p in req.body){
			qParams.push({'name':p, 'value':req.body[p]})
	}
	var context = {};
	context.dataList = qParams;	
	res.render('post', context);
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});