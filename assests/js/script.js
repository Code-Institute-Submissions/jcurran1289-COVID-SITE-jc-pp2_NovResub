// var continent = [ {
// "name": "Asia",
// "total_cases": "20715441",
// "total_deaths": "337656",
// "total_cases_per_million": "4426.697",
// "total_deaths_per_million": "72.154"
// } ,
// {
// "name": "Europe",
// "total_cases": "23807046",
// "total_deaths": "545714",
// "total_cases_per_million": "31838.354",
// "total_deaths_per_million": "729.811"
// } ,
// {
// "name": "Africa",
// "total_cases": "2760450",
// "total_deaths": "65468",
// "total_cases_per_million": "2009.812",
// "total_deaths_per_million": "47.666"
// } ,
// {
// "name": "North America",
// "total_cases": "23074544",
// "total_deaths": "512870",
// "total_cases_per_million": "38677.955",
// "total_deaths_per_million": "859.682"
// } ,
// {
// "name": "South America",
// "total_cases": "13194159",
// "total_deaths": "418041",
// "total_cases_per_million": "30383.077",
// "total_deaths_per_million": "962.651"
// } ,
// {
// "name": "Oceania",
// "total_cases": "31440",
// "total_deaths": "945",
// "total_cases_per_million": "727.442",
// "total_deaths_per_million": "21.865"
// }
// ]

let continent=[]; //create empty array

window.addEventListener("load", function(){
    getData() 
    
});


const api_url = 'https://api.covid19api.com/summary';
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const countries = data.Countries;
    // for(i=0; i< 10; i++){
    //     pp.push(countries[i]);
    // }
    continent=countries;
    onDone();
}


function onDone(){
    //    alert("done")
       console.log(continent[8])
        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        total_cases_per_million.innerHTML=continent[0].NewConfirmed;
        total_deaths_per_million.innerHTML=continent[0].NewDeaths;
    
}
// getISS();
console.log(continent);
// console.log(pp[0]);









let search_button = document.getElementById("search-button");


let continent_input = document.getElementById("continent_input");
let total_cases = document.getElementById("total_cases");
let total_deaths =document.getElementById("total_deaths");
let total_cases_per_million =document.getElementById("total_cases_per_million");
let total_deaths_per_million =document.getElementById("total_deaths_per_million");
let continentName =document.getElementById("continentHeader");




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




document.getElementById("btn-right").addEventListener("click", function(){
   

        let nextIndex = currentIndex + 1;
        // let nextContinet = ;

       if (currentIndex === continent.length-1){

        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        // total_deaths.innerHTML=continent[0].total_deaths;
        // total_cases_per_million.innerHTML=continent[0].total_cases_per_million;
        // total_deaths_per_million.innerHTML=continent[0].total_deaths_per_million;
        currentIndex=0;
       }else{

   
        
        continentName.innerHTML=continent[nextIndex].Country;
        total_cases.innerHTML=continent[nextIndex].TotalConfirmed;
        // total_deaths.innerHTML=continent[nextIndex].total_deaths;
        // total_cases_per_million.innerHTML=continent[nextIndex].total_cases_per_million;
        // total_deaths_per_million.innerHTML=continent[nextIndex].total_deaths_per_million;
        currentIndex = nextIndex;
        console.log(continent.length);
    }
    
});






const api_url2 = 'https://reqres.in/api/users';

const api_url3 = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json';




