

let temp = document.querySelector(".temp");
let circle = document.querySelector(".circle");
let tempNumber = parseInt(temp.textContent);
let input = document.querySelector("input");

var defaultLocation = "Chicago,IL";

function NewLocation() {
    defaultLocation = input;
    alert(input.value);
    console.log(input.value);
    return defaultLocation;
} 

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + defaultLocation + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

$.getJSON
(url,(jsonData) => 
{$("#place").text(jsonData.query.results.channel.item.title);

console.log("CONDITION(S): ",jsonData.query.results.channel.item.condition);
$("#weather").text(jsonData.query.results.channel.item.condition.text);
$("#date").text(jsonData.query.results.channel.item.condition.date);
$(".temp").text(jsonData.query.results.channel.item.condition.temp);

tempColor(tempNumber);

console.log("WIND CHILL:  ",jsonData.query.results.channel.wind.chill);
$("#windchill").text(jsonData.query.results.channel.wind.chill);

console.log("WINDSPEED: ",jsonData.query.results.channel.wind.speed);
$("#windspeed").text(jsonData.query.results.channel.wind.speed);

console.log("WIND DIRECTION: ",jsonData.query.results.channel.wind.direction);
});

function tempColor(num) {
    
    if(tempNumber > 105) {
        circle.style.backgroundColor = "FF0000";
    } 

    if(tempNumber > 75) {
        circle.style.backgroundColor = "F54747";
    } 

    if(tempNumber > 60) {
        circle.style.backgroundColor = "E18787";
    } 

    if(tempNumber > 25) {
        circle.style.backgroundColor = "E18787";
    } 

    else {
        circle.style.backgroundColor = "0767B0";
    }
    
    return circle.style.backgroundColor;
} 




