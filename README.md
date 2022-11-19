![COVID LOGO](assests/images/logo.png)

# COVID-19 Dashboard

My project is aimed at the average user; primarily those that are trying to find out more information on how countries around the world have been effect by COVID 19 number wise. The dashboard allows the user to search for a country and know the how many cases the country has reported, number of deaths, number of new cases that day, number of new deaths, a times series of the number of new cases the country reported each day in march 2020 and the location of the country on a map.

The website only has one page with a simple and clean layout.  There is a search box which allows users to search for any country.  The API then provides some high level information on the countries COVID numbers.  Utilising an API ensures that the data should be maintained and kept up to date.

If the COVID API returns a country, using the Google Maps geocoding api returns the longitude and latitude coordinates of the country, which are used to display the country on a google map embedded on the webpage. 

The website is built using HTML, CSS and JavaScript.  The website can be found [here]().

 ***

## UX
The purpose of this site is to allow users find information about a particular country and their COVID numbers.  The statistics and inforamtion are front and center of the with nothing else on the page to not distract the user. i used a simplistic all white website to ensure no distractions from the data displayed. 

### User Stories
The website is for users to find out more information on how COVID has effected each country around the world. As a user:
-I want search for a country and find out the total cases and total deaths the country has to reported to date
-I want to see a timeline of the cases per country
-I want to see where exactly the country is on a map 

As the owner of the website:
-I want users to be able to quickly search for a country and find out information about how COVID effected the country.
-I want to provide the user with informative data in a simplistic layout.
-I want to utilise an API to provide up to date information to my users.
-I want to utilise an API to provide a map showing where the country is in the world.


## Features

### Existing Features
- [COVID -19 Dashboard]():  The API allows for countries to be searched.  It requires the string to be an exact match to return results.  Each result contains some high level information on COVID in the particular country.  This is the basis of my website - the user enters a string and when they click the Search button or press Search which calls three APIs.

- The first API (https://documenter.getpostman.com/view/10808728/SzS8rjbc#auth-info-1e29ed29-066c-4494-ae5d-a6174a8fc551)(summary)  returns a summary of Covid in each country. From this it abstracts the total Cases, total deaths , the most recent new confirmed Cases and most recent new deaths for the country selected. 

-The second API (https://documenter.getpostman.com/view/10808728/SzS8rjbc#auth-info-1e29ed29-066c-4494-ae5d-a6174a8fc551)(summary) pulls a timeline of CCOVID cases reported in March 2020 per country and displays it in timeseries graph using Google chart. 

-The thrid API [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) searches for the country entered and returns the lonitude and latitiude coordinates of the country. These coordinates are then mapped on a embedded google map on the page. 

- [Google Charts](https://developers.google.com/chart/interactive/docs/gallery/linechart) is used to display the COVID cases timeseries data per country. The chart is interactive therefore the user has the ability to see what the covid cases reported on a particular date.



![website example](assests/images/COVID-19-Dashboard.gif)

### Features Left to Implement
-The ability to apply a date filter on the time series 
-The ability to compare a countries numbers to another country.

## Technologies Used
I used the following languages, frameworks and libraries to build this website:
-HTML5 - HTML5 has been used to code the content of the website.
-CSS3 - CSS3 has been used to style the content.
-Javascript - JavaScript has been used to add interactivity to the site through calling API's and utilising the data returned by them.
-Bootstrap - Bootstrap was used to quickly build the website and have the site responsive.
-FontAwesome - FontAwesome was used to insert arrow icons into the webpage.
-Google Fonts - Google Fonts have been used to style the text in the website. 

## Testing / Development Obstacles

## Testing

### Lighthouse Audit 
![Lighthouse Audit](assests/images/lighthouse_pp2.PNG)

### Validator Testing 
#### W3C CSS Validation 
Passed through the CSS validator with no errors.
![CSS Validator](assests/images/css_val_pp2.PNG)

#### HTML Validator 
Passed through HTML Validator with no errors.
![HTML Validator](assests/images/HTML_VAl_pp2.PNG)

#### JSHint 
Passed through JSHint with no errors. 
![JS Validator](assests/images/JS_val.PNG)

#### Cross Browser and Device Testing

- I tested my site on the below. 
1. Samsung S20 - 412 X 915
2. iPhone SE - 375 X 667 
3. pixel 5 - 393 x 851

- It was also tested on safari, chrome and firefox. 


-During implementing the API, I noticed then when loading the API of the summary of the countries COVID numbers, the code was moving onto the next line before the API was complete. This made it impossible to test the data coming in becasue the console.log was not showing any data. To fix this I created the function onDone(). Therefore the onDone() funciton is called when the API is finished calling the data therefore i was able to see what the data looked like and use it for my website.

-The console was showing errors for when the website loads related to the map and the line chart when the website initally loads. I changed around the calling of the functions to fix these errors


## Defects

## Deployments 
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  ![Settings Tab](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/settings-screenshot.png)
  - Scroll down the page and find the Github pages section, and click on the link.
  ![Github Page Link](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/github-pages-screenshot.png)
  - From the source section drop-down menu, select the Master Branch
  ![Select Source](https://github.com/KateEllen/Animal-Quiz/blob/main/assets/images/documentation/published-screenshot.png)
  - Select the save button. 
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://kateellen.github.io/Animal-Quiz/