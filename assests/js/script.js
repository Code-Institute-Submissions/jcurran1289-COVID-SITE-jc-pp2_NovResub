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




// let  continent_input = document.getElementById("continent_input");

console.log(search_button);

function search_continent() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

// document.getElementById("search-button").addEventListener("click", function search_continent(){
//     let currentContinent= continent[i];
//     let name = currentContinent["continent"]


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

