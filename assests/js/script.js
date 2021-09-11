var continent = [ {
"continent": "Asia",
"total_cases": "20715441",
"total_deaths": "337656",
"total_cases_per_million": "4426.697",
"total_deaths_per_million": "72.154"
} ,
{
"continent": "Europe",
"total_cases": "23807046",
"total_deaths": "545714",
"total_cases_per_million": "31838.354",
"total_deaths_per_million": "729.811"
} ,
{
"continent": "Africa",
"total_cases": "2760450",
"total_deaths": "65468",
"total_cases_per_million": "2009.812",
"total_deaths_per_million": "47.666"
} ,
{
"continent": "North America",
"total_cases": "23074544",
"total_deaths": "512870",
"total_cases_per_million": "38677.955",
"total_deaths_per_million": "859.682"
} ,
{
"continent": "South America",
"total_cases": "13194159",
"total_deaths": "418041",
"total_cases_per_million": "30383.077",
"total_deaths_per_million": "962.651"
} ,
{
"continent": "Oceania",
"total_cases": "31440",
"total_deaths": "945",
"total_cases_per_million": "727.442",
"total_deaths_per_million": "21.865"
}
]


window.addEventListener("load", function(){

    let continent_input = document.getElementById("continent_input");
    let total_cases = document.getElementById("total_cases");
    let total_deaths =document.getElementById("total_deaths");
    let total_cases_per_million =document.getElementById("total_cases_per_million");
    let total_deaths_per_million =document.getElementById("total_deaths_per_million");


    continent_input.value=continent[0].continent;

    total_cases.innerHTML=continent[0].total_cases;
    total_deaths.innerHTML=continent[0].total_deaths;
    total_cases_per_million.innerHTML=continent[0].total_cases_per_million;
    total_deaths_per_million.innerHTML=continent[0].total_deaths_per_million;

});



 let search_button = document.getElementById("search-button");
// let  continent_input = document.getElementById("continent_input");

console.log(search_button);