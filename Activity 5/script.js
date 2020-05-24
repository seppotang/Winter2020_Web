//Retrieved from https://home.openweathermap.org/api_keys
var apiKey = 'YOUR API KEY HERE';


//GET handling
document.addEventListener('DOMContentLoaded', bindGetButtons);

function getFieldVerify(){
	if(document.getElementById('countryCode').value <= 0){
		document.getElementById('weatherErrorField').textContent = "Country Code is missing!";
		return false;
	}
	else if((document.getElementById('cityName').value <= 0) & (document.getElementById('zipCode').value <= 0))
	{
		document.getElementById('weatherErrorField').textContent = "cityName or Zip Code is missing!";
		return false;
	}
}

function bindGetButtons(){
	document.getElementById('weatherSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var countryCode = document.getElementById('countryCode').value;
		//If City Handling
		if(document.getElementById('cityName').value != ""){
			var cityName = document.getElementById('cityName').value;
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryCode + "&appid=" + apiKey, false);
		}
		//Else if Zip Handling
		else if(document.getElementById('zipCode').value > 0){
			var zipCode = document.getElementById('zipCode').value;
			req.open("GET", "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "," + countryCode + "&appid=" + apiKey, false);
		}
		//End If
		
		//Disable this statement because setting "Application/JSON" as header causes CORS issues.
		//req.setRequestHeader('Content-Type', 'application/json');
		
		req.send(null);
		
		//TO-DO: Figure out parsing
		var response = JSON.parse(req.responseText);
		document.getElementById('weatherResultField').innerHTML = "avg temp:" + response.main.temp;
		event.preventDefault();
	})
}

//POST handling

document.addEventListener('DOMContentLoaded', bindPostButtons);

function postFieldVerify(){
	if(document.getElementById('postField').value <= 0){
		document.getElementById('postErrorField').textContent = "No Input text found!";
		return false;
	} else{
		document.getElementById('postErrorField').textContent = "";
	}
}

function bindPostButtons(){
	document.getElementById('postSubmit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {postField:null};
		payload.postField = document.getElementById('postField').value;
		req.open('POST', 'http://httpbin.org/post', false);
		//req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(payload));
		var response = JSON.parse(req.responseText);
		document.getElementById('postResponse').textContent = response.json.postField;
		event.preventDefault();
	})
}