{

   const api = {

      key:"7796bd09f33cf56521ffdeee6dda4a94",
      base: "https://api.openweathermap.org/data/2.5/",

  };
    
  const defaultCityValue = "New York, US";
  document.onload = paint(defaultCityValue);
    
  const searchBox = document.querySelector(".search-box");
  searchBox.addEventListener("keypress", setQuery);
    
  function setQuery(event) {

      if (event.keyCode = 13) {

          getResults(searchBox.value);

      }

  }
    
  function getResults(query) {

    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)

      .then((weather) => handleErrors(weather))
      .then((weather) => {

        return weather.json();

      })

      .then(displayResults)
      .catch((error) => console.log(error));
    }
    
  function displayResults(weather) {
    
    let city = document.querySelector(".location .city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let temp = document.querySelector(".current .temperature");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;

    let weather_el = document.querySelector(".current .weather");
    weather_el.innerText = weather.weather[0].main;

    let highlow = document.querySelector(".current .high-low");
    highlow.innerHTML = `${Math.round(weather.main.temp_min
    )}<span>°F</span> / ${Math.round(weather.main.temp_max)}<span>°F</span>`;
    
    let now = new Date();
    let date = document.querySelector(".date .day");
    date.innerHTML = dateBuilder(now);
    
    store(city.innerText);
  }

  function dateBuilder (d) {

      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${month} ${date}, ${year}`;

  }

  function store(location) {

    localStorage.setItem("location", location);
  
  }

  function paint(defcity) {

    if (localStorage.getItem("location") === null) {

      getResults(defcity);
      
    } else {

      getResults(localStorage.getItem("location"));}
      
    }
    
  toggler.addEventListener("change", convertCurrent);
  function convertCurrent(event){

    currentCity = document.querySelector(".location .city").innerText;
      getResults(currentCity);

  }


  function handleErrors(weather) {
      
      if (!weather.ok) {

        if (weather.status === 404) {

          throw new Error("City Not Found");

        } else {

          throw new Error(weather.status + " : " + weather.statusText);

        }

      }

      return weather;

    }
    


}