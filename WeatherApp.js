
let temp = document.querySelector(".temp");
let circle = document.querySelector(".circle");
let tempNumber = parseInt(temp.textContent);
let input = document.querySelector("input");

var defaultLocation = "Chicago,IL";


//Create a FUNCTION that:
//(1) Can accept one of two arguments and (use the "||") and will use whichever returns TRUE. One will be the variable that the user enters (put this on the left side of the "||") and the other will act as the "default" value if the user enters a "falsy value" or doesn't enter one at all.
//(2) Encapsulates the "var" that defines the URL.
//(3) RETURNS the ENTIRE $.getJSON() value.

function FindWeatherConditions(enterlocation = document.querySelector("#enterlocation").value || "Chicago,IL") {

    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + enterlocation + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    return $.getJSON
    (url,(jsonData) => 
    {$("#place").text(jsonData.query.results.channel.item.title);
    
    console.log("CONDITION(S): ",jsonData.query.results.channel.item.condition);
    $("#weather").text(jsonData.query.results.channel.item.condition.text);
    $("#date").text(jsonData.query.results.channel.item.condition.date);
    $(".temp").text(jsonData.query.results.channel.item.condition.temp);
    
    console.log("WIND CHILL:  ",jsonData.query.results.channel.wind.chill);
    $("#windchill").text(jsonData.query.results.channel.wind.chill);
    
    console.log("WINDSPEED: ",jsonData.query.results.channel.wind.speed);
    $("#windspeed").text(jsonData.query.results.channel.wind.speed);
    
    console.log("WIND DIRECTION: ",jsonData.query.results.channel.wind.direction);
    });
} 

//CALL the function (that was defined above) below this comment.

FindWeatherConditions();