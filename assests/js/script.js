var continent = [ {
"name": "Asia",
"total_cases": "20715441",
"total_deaths": "337656",
"total_cases_per_million": "4426.697",
"total_deaths_per_million": "72.154"
} ,
{
"name": "Europe",
"total_cases": "23807046",
"total_deaths": "545714",
"total_cases_per_million": "31838.354",
"total_deaths_per_million": "729.811"
} ,
{
"name": "Africa",
"total_cases": "2760450",
"total_deaths": "65468",
"total_cases_per_million": "2009.812",
"total_deaths_per_million": "47.666"
} ,
{
"name": "North America",
"total_cases": "23074544",
"total_deaths": "512870",
"total_cases_per_million": "38677.955",
"total_deaths_per_million": "859.682"
} ,
{
"name": "South America",
"total_cases": "13194159",
"total_deaths": "418041",
"total_cases_per_million": "30383.077",
"total_deaths_per_million": "962.651"
} ,
{
"name": "Oceania",
"total_cases": "31440",
"total_deaths": "945",
"total_cases_per_million": "727.442",
"total_deaths_per_million": "21.865"
}
]
let search_button = document.getElementById("search-button");
var arr = ['foo', 'bar', 'baz'];
    
let i =0
document.getElementById("btn-right").addEventListener("click", nextItem);

window.addEventListener("load", function(){

    let continent_input = document.getElementById("continent_input");
    let total_cases = document.getElementById("total_cases");
    let total_deaths =document.getElementById("total_deaths");
    let total_cases_per_million =document.getElementById("total_cases_per_million");
    let total_deaths_per_million =document.getElementById("total_deaths_per_million");
    let continentName =document.getElementById("continentHeader");


    continentName.innerHTML=continent[0].name;
    total_cases.innerHTML=continent[0].total_cases;
    total_deaths.innerHTML=continent[0].total_deaths;
    total_cases_per_million.innerHTML=continent[0].total_cases_per_million;
    total_deaths_per_million.innerHTML=continent[0].total_deaths_per_million;



    document.getElementById('btn-left').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            total_cases.innerHTML = prevItem();
        }
    );
    
    document.getElementById('btn-right').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            total_cases.innerHTML = nextItem();
        }
    );

});




var currentIndex = 0;
document.getElementById("search-button").addEventListener("click", function () {
    var value = document.getElementById('continent_input').value

    if (value.length > 0) {
        var found = false;
        var result = null;
        var newIndex = 0;

        for (i = 0; i < continent.length; i++) {
            var currentContinet = continent[i];
            var name = currentContinet['continent'];

            if (name.toLowerCase() === value.toLowerCase()) {
                found = true;
                result = currentContinet;
                newIndex = i; //save the index
            }
        }

        if (found === true) {
            total_cases.innerHTML = result.total_cases;
            total_deaths.innerHTML = result.total_deaths;
            total_cases_per_million.innerHTML = result.total_cases_per_million;
            total_deaths_per_million.innerHTML = result.total_deaths_per_million;

            currentIndex = newIndex; //set the new current index
        }else{
            alert("we were unable to find youyr continent")
        }
    } else {
        alert("Please enter a continent")
    }
});



function nextItem() {
    i = i + 1; // increase i by one
    i = i % continent.length; // if we've gone too high, start from `0` again
  
    return continent[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = continent.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return continent[i]; // give us back the item of where we are now
}

