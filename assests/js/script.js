/*jshint esversion: 8 */
let continent=[]; //create empty array


window.addEventListener("load", function(){
    getData();
    
});

//calling the first API to grab the data for the statistics summary section 
const api_url = 'https://api.covid19api.com/summary';
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const countries = data.Countries;
    continent=countries;
    //calls the onDone function when the API is finished pulling the data
    onDone();
}

//Calling the second API, time series data, populate the google chart
let countriesTimelineDate= [];
async function getTimeData(place) {
const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
    const countriesTimeline = await response.json();
    countriesTimelineDate= [['Date', 'Cases']];
    for(let i=0; i< countriesTimeline.length; i++){

        countriesTimelineDate.push([countriesTimeline[i].Date.slice(0, 10),countriesTimeline[i].Cases]);
    }
    drawChart(countriesTimelineDate);
console.log(countriesTimelineDate);
}


let mapLocation;
async function getMapData(place) {
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+place+'&key=AIzaSyDlDbfJtg5Gs7rrr59IwV0RgFxOUcEIS1s');
    const mapsData = await response.json();
    mapLocation="https://www.google.com/maps/embed/v1/view?key=AIzaSyCJaLEWACVCvcKIEyUx-1BHi8a6iP0X3VQ&center="+mapsData.results[0].geometry.location.lat+","+mapsData.results[0].geometry.location.lng+"&zoom=6&maptype=roadmap";
    document.getElementById("map").src =mapLocation;
}

function onDone(){
     if (typeof(continent)!="undefined")
     {
        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
        getMapData(continent[0].Country);
        getTimeData(continent[0].Country);
    }else{
        document.getElementById("curve_chart").innerHTML="Unable access chart right now. Please try again later";
    }
    
}


let total_cases = document.getElementById("total_cases");
let total_deaths =document.getElementById("total_deaths");
let newCases =document.getElementById("newCases");
let newDeaths =document.getElementById("newDeaths");
let continentName =document.getElementById("continentHeader");

let currentIndex = 0;
document.getElementById("search-button").addEventListener("click", function () {
    let value = document.getElementById('continent_input').value;

    if (value.length > 0) {
        let found = false;
        let result = null;
        let newIndex = 0;

        for (let i = 0; i < continent.length; i++) {
            let currentContinet = continent[i];
            let name = currentContinet.Country;

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
            getMapData(result.Country);
            getTimeData(result.Country);

            currentIndex = newIndex; //set the new current index
        }else{
            alert("Unable to find the country");
        }
    } else {
        alert("Please enter a country");
    }
});

document.getElementById("btn-right").addEventListener("click", function(){
   

        let nextIndex = currentIndex + 1;

        if (currentIndex === continent.length-1){

        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
        getMapData(continent[0].Country);
        getTimeData(continent[0].Country);
       
        currentIndex=0;
       }else{

        continentName.innerHTML=continent[nextIndex].Country;
        total_cases.innerHTML=continent[nextIndex].TotalConfirmed;
        total_deaths.innerHTML=continent[nextIndex].TotalDeaths;
        newCases.innerHTML=continent[nextIndex].NewConfirmed;
        newDeaths.innerHTML=continent[nextIndex].NewDeaths;
        getMapData(continent[nextIndex].Country);
        getTimeData(continent[nextIndex].Country);

        currentIndex = nextIndex;      
    }
 
});

document.getElementById("btn-left").addEventListener("click", function(){
   
    let prevIndex = currentIndex - 1;

   if (currentIndex === 0){
    
    continentName.innerHTML=continent[continent.length-1].Country;
    total_cases.innerHTML=continent[continent.length-1].TotalConfirmed;
    total_deaths.innerHTML=continent[continent.length-1].TotalDeaths;
    newCases.innerHTML=continent[continent.length-1].NewConfirmed;
    newDeaths.innerHTML=continent[continent.length-1].NewDeaths;
    getMapData(continent[continent.length-1].Country);
    getTimeData(continent[continent.length-1].Country);

    currentIndex=continent.length-1;
   }else{

    continentName.innerHTML=continent[prevIndex].Country;
    total_cases.innerHTML=continent[prevIndex].TotalConfirmed;
    total_deaths.innerHTML=continent[prevIndex].TotalDeaths;
    newCases.innerHTML=continent[prevIndex].NewConfirmed;
    newDeaths.innerHTML=continent[prevIndex].NewDeaths;
    getMapData(continent[prevIndex].Country);
    getTimeData(continent[prevIndex].Country);

    currentIndex = prevIndex;
  
}

});

google.charts.load('current', {'packages':['corechart']});

function drawChart(trydata) {
  let data = google.visualization.arrayToDataTable(trydata);

  let options = {
    title: 'COVID Timeseriers',
    curveType: 'function',
    legend: { position: 'bottom' }
   
  };

  let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}


