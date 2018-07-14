

var EnterLocation = "Chicago, IL";

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + EnterLocation + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

$.getJSON
(url,(jsonData) => 
{console.log(jsonData.query.results.channel.item.title);

console.log("CONDITION(S): ",jsonData.query.results.channel.item.condition);
$(".temp").text(jsonData.query.results.channel.item.condition.temp);

console.log("WIND CHILL:  ",jsonData.query.results.channel.wind.chill);

console.log("WINDSPEED: ",jsonData.query.results.channel.wind.speed);

console.log("WIND DIRECTION: ",jsonData.query.results.channel.wind.direction);
});



