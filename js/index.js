
//listener for temp swap
$(".swap").click(switchTemps);

// blow creates F and C  var. I will probably remove these
// because I recreate them locally and then never reuse them.
// simpleweather is running asyncronously so I had to merge
// if/else clothing function. Would like to retool this later.
var fahrenheit = 0;
var celsius = 0;
//grabs weather using simpleweather plugin
$(document).ready(function() {
  $.simpleWeather({
    location: 'newyork, NY',
    woeid: '',
    unit: 'f',
    success: function(weather) {
    //renames weather.temp as fahrenheit
     fahrenheit = weather.temp;
    console.log(fahrenheit);
     //puts that value into .fahrenheit div
      $(".fahrenheit").html(fahrenheit);
      //converts to celsius then puts in .celsius div
       celsius = fahrenheit - 32;
	var celsius = celsius * 5;
	var celsius = celsius / 9;
	var celsius = parseInt(celsius);
	$(".celsius").html(celsius);
// scarf	//change below to switch and get rid of if/else
	if (fahrenheit < 45) {
	$(".scarf").html('<img src="img/scarf.svg"></img>');
	$(".hot_coffee").html('<img src="img/hot_coffee.svg"></img>');
} else {
	$(".scarf").html("");
	$(".hot_coffee").html("");
};
// hot coffee	
	if (fahrenheit > 45 && fahrenheit < 55) {
	$(".hot_coffee").html('<img src="img/hot_coffee.svg"></img>');
} else {
	$(".hot_coffee").html("");
};
//sunglasses
if (fahrenheit > 55) {

	$(".sunglasses").html('<img src="img/sunglasses.svg"></img>');
	$(".bignumber").css('color', '#F7D2FF');
} else {
	$(".sunglasses").html("");
};
// coffee and big number color 
if (fahrenheit > 90 && fahrenheit <= 95) {
	$(".ice_coffee").html('<img src="img/ice_coffee.svg"></img>');
	$(".bignumber").css('color', '#FFBDD3');
} else {
	$(".ice_coffee").html("");
};
//visor & coffee hotter
if (fahrenheit > 95) {
	$(".visor").html('<img src="img/visor.svg"></img>');
	$(".ice_coffee_hotter").html('<img src="img/ice_coffee_hotter.svg"></img>');
	$(".bignumber").css('color', '#FF558E');
	
} else {
	$(".visor").html("");
	$(".ice_coffee_hotter").html("");
};

    },
  });
});

// switches celsius and fahrenheit position, including symbols
function switchTemps(){
//gives the divs html a variable name based on temp class
var bigText = $('div.bignumber').html();// selects the text inside of .bignumber
var smallText = $('div.smallnumber').html(); //selects the text inside of .smallnumber
$('div.bignumber').html(smallText);
$('div.smallnumber').html(bigText);
};
console.log(fahrenheit);

