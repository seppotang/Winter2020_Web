//Initialize Express / Handlebars
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

//•"Render" a page that has a H1 tag displaying "GET Request Received"
//res.render('home.handlebars');

app.get('/',function(req,res){
	var h = document.createElement("H1");
	var t = document.createTextNode("GET Request Received");
	h.appendChild(t); // Append the text node to the H1 element 
	document.body.appendChild(h); // Append the H1 element to the document body
	res.render('home.handlebars');
	
	//•Below the H1 tag, create an HTML table that shows all parameter names
	//and values which were sent in the URL query string for BOTH GET and POST
	//(you can still send parameters in the URL when making POST requests)
	for(i = 1; i < 4; i++){
		var newRow = document.createElement("tr");
		newTable.appendChild(newRow);
		for(var j = 1; j < 5; j++){
			//Create table cell
			var newCell = document.createElement("td");
			newCell.style.border = "1px solid #000";
			newCell.textContent = i + ' ' + j;
			newRow.appendChild(newCell);
		}
	}
});

app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

//TO-DO: Handle Post
//Upon receiving a POST request
//•"Render" a page that has a H1 tag displaying "POST Request Received".

//•Below the H1 tag, create an HTML table that shows all parameter names
//and values which were sent in the URL query string for BOTH GET and POST
//(you can still send parameters in the URL when making POST requests)

//•Below the URL parameter table, create another table that displays the property names
//and values that were received in the request body. Your server needs to be able to
//accept request bodies formatted as BOTH URL encoded query strings or JSON data.
app.post('/', function(req,res){
	var h = document.createElement("H1");
	var t = document.createTextNode("POST Request Received");
	h.appendChild(t); // Append the text node to the H1 element 
	document.body.appendChild(h); // Append the H1 element to the document body
	
	var myTable = document.createElement("table");
	var thead = document.createElement("thead");
	var qParams = [];
	for (var p in req.body){
		qParams.push({'name':p,'value':req.body[p]})
	}
	console.log(qParams);
	console.log(req.body);
	var context = {};
	context.dataList = qParams;
	res.render('post-loopback', context);
});
