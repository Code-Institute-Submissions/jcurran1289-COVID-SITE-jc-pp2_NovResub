// var continent = [ {
// "name": "Asia",
// "total_cases": "20715441",
// "total_deaths": "337656",
// "newCases": "4426.697",
// "newDeaths": "72.154"
// } ,
// {
// "name": "Europe",
// "total_cases": "23807046",
// "total_deaths": "545714",
// "newCases": "31838.354",
// "newDeaths": "729.811"
// } ,
// {
// "name": "Africa",
// "total_cases": "2760450",
// "total_deaths": "65468",
// "newCases": "2009.812",
// "newDeaths": "47.666"
// } ,
// {
// "name": "North America",
// "total_cases": "23074544",
// "total_deaths": "512870",
// "newCases": "38677.955",
// "newDeaths": "859.682"
// } ,
// {
// "name": "South America",
// "total_cases": "13194159",
// "total_deaths": "418041",
// "newCases": "30383.077",
// "newDeaths": "962.651"
// } ,
// {
// "name": "Oceania",
// "total_cases": "31440",
// "total_deaths": "945",
// "newCases": "727.442",
// "newDeaths": "21.865"
// }
// ]

let continent=[]; //create empty array

window.addEventListener("load", function(){
    getData() ;
    getData2();
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

const api_url2 = 'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
async function getData2() {
    const response = await fetch(api_url2);
    const countriesTimeline = await response.json();
    // const countriesTimeline = data.Countries;
    // for(i=0; i< 10; i++){
    //     pp.push(countries[i]);
    // }
    console.log(countriesTimeline)
    // continent=countries;
    onDone();
}

function onDone(){
    //    alert("done")
     
        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
    
}
// getISS();
console.log(continent);
// console.log(pp[0]);
console.log(continent[continent.length]);



let search_button = document.getElementById("search-button");


let continent_input = document.getElementById("continent_input");
let total_cases = document.getElementById("total_cases");
let total_deaths =document.getElementById("total_deaths");
let newCases =document.getElementById("newCases");
let newDeaths =document.getElementById("newDeaths");
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
            var name = currentContinet['Country'];

            console.log(name);

            if (name.toLowerCase() === value.toLowerCase()) {
                found = true;
                result = currentContinet;
                newIndex = i; //save the index
            }
        }

        if (found === true) {
            continentName.innerHTML=result.Country;
            total_cases.innerHTML=result.TotalConfirmed;
            total_deaths.innerHTML=result.TotalDeaths;
            newCases.innerHTML=result.NewConfirmed;
            newDeaths.innerHTML=result.NewDeaths;

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
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
    
        currentIndex=0;
       }else{

   
        continentName.innerHTML=continent[nextIndex].Country;
        total_cases.innerHTML=continent[nextIndex].TotalConfirmed;
        total_deaths.innerHTML=continent[nextIndex].TotalDeaths;
        newCases.innerHTML=continent[nextIndex].NewConfirmed;
        newDeaths.innerHTML=continent[nextIndex].NewDeaths;
    
        currentIndex = nextIndex;
        console.log(continent.length);
    }
    
});

document.getElementById("btn-left").addEventListener("click", function(){
   

    let prevIndex = currentIndex - 1;
    // let nextContinet = ;

   if (currentIndex === 0){
    
    continentName.innerHTML=continent[continent.length-1].Country;
    total_cases.innerHTML=continent[continent.length-1].TotalConfirmed;

    total_deaths.innerHTML=continent[continent.length-1].TotalDeaths;
    newCases.innerHTML=continent[continent.length-1].NewConfirmed;
    newDeaths.innerHTML=continent[continent.length-1].NewDeaths;
    
    currentIndex=continent.length-1;
   }else{


    
    continentName.innerHTML=continent[prevIndex].Country;
    total_cases.innerHTML=continent[prevIndex].TotalConfirmed;
    total_deaths.innerHTML=continent[prevIndex].TotalDeaths;
    newCases.innerHTML=continent[prevIndex].NewConfirmed;
    newDeaths.innerHTML=continent[prevIndex].NewDeaths;

    currentIndex = prevIndex;
    console.log(continent.length);
}

});






// const api_url2 = 'https://reqres.in/api/users';

// const api_url3 = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json';


