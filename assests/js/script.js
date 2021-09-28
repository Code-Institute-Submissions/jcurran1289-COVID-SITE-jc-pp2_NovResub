let continent=[]; //create empty array
// let country=[]; //create empty array
// let totalCases=[]; //create empty array
// let highestCases=[];
// let highestCasesCountry=[];

window.addEventListener("load", function(){
    getData() ;
    // myMapfff();
    
    getTimeData();
    
   
    // getData2(mapLocation) ;
    // timeLineChart();

});



const api_url = 'https://api.covid19api.com/summary';
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const countries = data.Countries;

    console.log(data);
    

    continent=countries;
    // var maxCases = 0;
    // for (var i = 0; i < countries.length; i++) {
    //     if (countries[i].TotalConfirmed > maxCases) {
    //         highestCasesCountry.push(countries[i].Country); 
    //         highestCases.push(countries[i].TotalConfirmed); 
    //     }
    // }

  
     
    onDone();
}

let countriesTimelineDate= [];
// let countriesTimelineDate= [['Date', 'Cases']];
const api_url2S = 'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
async function getTimeData(place) {
    // const response = await fetch(api_url2);
    // const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
    const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
    const countriesTimeline = await response.json();
    countriesTimelineDate= [['Date', 'Cases']]
    // countriesTimelineDate.push('Date', 'Cases');
    for(i=0; i< countriesTimeline.length; i++){
        // countriesTimelineDate.push(countriesTimeline[i].Date.slice(0, 10), countriesTimeline[i].Cases));
        // countriesTimelineCases.push(countriesTimeline[i].Cases);
        // console.log(countriesTimeline[i].Date.slice(0, 10), countriesTimeline[i].Cases))
        countriesTimelineDate.push([countriesTimeline[i].Date.slice(0, 10),countriesTimeline[i].Cases]);
    }
    drawChart(countriesTimelineDate);
    console.log(countriesTimelineDate);
    
}



// let mapsLat= [];
// let mapsLon= [];
// const api_url2 = 'https://api.covid19api.com/country/Afghanistan/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';

// async function getData2(place) {
//     // const response = await fetch(api_url2);
//     const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
//     const mapsData = await response.json();
//     // const countriesTimelineCountry = countriesTimeline.Country;
    
//         mapsLat.push(mapsData[0].Lon);
//         mapsLon.push(mapsData[0].Lat);
    
//         console.log(place);
  
// }
let mapLocation= [];
const api_url2 = 'https://maps.googleapis.com/maps/api/geocode/json?address=ch&key=AIzaSyDlDbfJtg5Gs7rrr59IwV0RgFxOUcEIS1s';
async function getData2(place) {
    // const response = await fetch(api_url2);
    const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+place+'&key=AIzaSyDlDbfJtg5Gs7rrr59IwV0RgFxOUcEIS1s');
    // const api_url2 = 'https://maps.googleapis.com/maps/api/geocode/json?address=Afghanistan&key=AIzaSyDlDbfJtg5Gs7rrr59IwV0RgFxOUcEIS1s';
    const mapsData = await response.json();
    // const mapLocation= mapsData.results[0].geometry.location;
    // const countriesTimelineCountry = countriesTimeline.Country;
    
    // console.log(JSON.stringify(mapsData));
    // console.log(mapsData.results[0]);
    // mapLocation.push(mapsData.results[0].geometry.location.lat);
        // // mapsLon.push(mapsData[0].Lat);
        // console.log(mapsData.results[0].geometry.location.lat);
        // console.log(mapsData.results[0].geometry.location.lng);
        // myMap(mapsData.results[0].geometry.location.lat, mapsData.results[0].geometry.location.lng);
        // myMap();

}
function onDone(){

     
        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
        getTimeData(continent[0].Country)
        // getData2('ireland');
 
        
}





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
            getTimeData(result.Country);

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
        getTimeData(continent[0].Country);
       
    
        currentIndex=0;
       }else{

       
        
        continentName.innerHTML=continent[nextIndex].Country;
        total_cases.innerHTML=continent[nextIndex].TotalConfirmed;
        total_deaths.innerHTML=continent[nextIndex].TotalDeaths;
        newCases.innerHTML=continent[nextIndex].NewConfirmed;
        newDeaths.innerHTML=continent[nextIndex].NewDeaths;
        getTimeData(continent[nextIndex].Country);
       
      
        
        // console.log(mapsLat);
        // console.log(mapsLon);
    
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

 




let testd =[
    ['Year', 'Sales'],
    ['2004',  1000],
    ['2005',  1170],
    ['2006',  660],
    ['2007',  1030]
  ]

  let testd2 =[
    ['Year', 'Sales'],
    ['2004',  10],
    ['2005',  11],
    ['2006',  60],
    ['2007',  10]
  ]
  console.log(testd);