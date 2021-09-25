let continent=[]; //create empty array

window.addEventListener("load", function(){
    getData() ;
    timeLineChart();
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

let countriesTimelineDate= [];
let countriesTimelineCases= [];
const api_url2 = 'https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z';
async function getData2(place) {
    // const response = await fetch(api_url2);
    const response = await fetch('https://api.covid19api.com/country/'+place+'/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z');
    const countriesTimeline = await response.json();
    // const countriesTimelineCountry = countriesTimeline.Country;
    for(i=0; i< countriesTimeline.length; i++){
        countriesTimelineDate.push(countriesTimeline[i].Date.slice(0, 10));
        countriesTimelineCases.push(countriesTimeline[i].Cases);
    }

    // ee=countriesTimeline;
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
        console.log(continent);
        console.log(countriesTimelineDate);
        console.log(countriesTimelineCases);
    
}
// getISS();

// console.log(pp[0]);




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

 function timeLineChart(){
 
var ctx = document.getElementById('chart').getContext('2d');

getData2(ireland);
var myChart = new Chart(ctx, {
    type: 'line',
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
