let continent=[]; //create empty array
// let country=[]; //create empty array
// let totalCases=[]; //create empty array
// let highestCases=[];
// let highestCasesCountry=[];

window.addEventListener("load", function(){
    getData() ;
    myMapfff(mapsLat,mapsLon);
    
    
});


const api_url = 'https://api.covid19api.com/summary';
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const countries = data.Countries;
    

    continent=countries;
    // var maxCases = 0;
    // for (var i = 0; i < countries.length; i++) {
    //     if (countries[i].TotalConfirmed > maxCases) {
    //         highestCasesCountry.push(countries[i].Country); 
    //         highestCases.push(countries[i].TotalConfirmed); 
    //     }
    // }

    getData2(continent[0].Country);
     console.log(continent);
    onDone();
}

// let countriesTimelineDate= [];
// let countriesTimelineCases= [];
// const api_url2 = 'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
// async function getData2(place) {
//     // const response = await fetch(api_url2);
//     const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
//     const countriesTimeline = await response.json();
//     // const countriesTimelineCountry = countriesTimeline.Country;
//     for(i=0; i< countriesTimeline.length; i++){
//         countriesTimelineDate.push(countriesTimeline[i].Date.slice(0, 10));
//         countriesTimelineCases.push(countriesTimeline[i].Cases);
//     }

   
// }



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
let mapsLat= [];
let mapsLon= [];
const api_url2 = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDlDbfJtg5Gs7rrr59IwV0RgFxOUcEIS1s';
async function getData2(place) {
    // const response = await fetch(api_url2);
    const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
    const mapsData = await response.json();
    // const countriesTimelineCountry = countriesTimeline.Country;
    
        mapsLat.push(mapsData[0].Lon);
        mapsLon.push(mapsData[0].Lat);
    
        console.log(place);
  
}
function onDone(){

     
        continentName.innerHTML=continent[0].Country;
        total_cases.innerHTML=continent[0].TotalConfirmed;
        total_deaths.innerHTML=continent[0].TotalDeaths;
        newCases.innerHTML=continent[0].NewConfirmed;
        newDeaths.innerHTML=continent[0].NewDeaths;
 
        
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
        // timeLineChart(continent[0].Country);
        
    
        currentIndex=0;
       }else{

       
        
        continentName.innerHTML=continent[nextIndex].Country;
        total_cases.innerHTML=continent[nextIndex].TotalConfirmed;
        total_deaths.innerHTML=continent[nextIndex].TotalDeaths;
        newCases.innerHTML=continent[nextIndex].NewConfirmed;
        newDeaths.innerHTML=continent[nextIndex].NewDeaths;
        // getData2(continent[nextIndex].Country);
        
        console.log(mapsLat);
        console.log(mapsLon);
    
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

 function timeLineChart(){
 
        var ctx = document.getElementById('chart').getContext('2d');

        // getData2(place);
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: countriesTimelineDate,
                // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'New Cases',
                    fill: true,
                    // data: [12, 19, 3, 5, 2, 3],
                    data: countriesTimelineCases,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
};




function myMapfff(Lat, Lon) {
    var mapProp= {
    center:new google.maps.LatLng(67.71,33.94),
    //   center:new google.maps.LatLng(Lat,Lon),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
 }


 var country = "Germany";
var geocoder;

geocoder.geocode( {'address' : country}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
    }
});
