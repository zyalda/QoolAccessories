function GetTheWeather(){
  // Här definierar vi all data som behövs för att kunna anropa API:et
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = "88d0c4dfee5757352506e101aa221b3f";
  const cityParam = document.getElementById("city").value;
  const city = cityParam;
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=sv`;

  // Test me i din browser! (byt ut nyckeln)
  // https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=xxxxxxxxxxxxxxxxxxx&units=metric&lang=sv

  https: fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nätverksrespons var inte ok");
      }
      return response.json();
    })
    .then((data) => {
      const temperature = data.main.temp;
      const location = data.name;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

      // Ny kod för att hämta iconen!
      document.getElementById("weatherInfo").innerHTML =
      `<p id="city-lable"> ${location} </p><p id="weather-temp"> ${temperature}°C.
       <sup><img src="${iconUrl}" alt="Väderikon" id="weather-img"></sup></p>`;
    })
    .catch((error) => {
      console.error("Det gick inte att hämta väderdata:", error);
    });
}
function myOnfocus(x) {
  x.value= "";
}

GetTheWeather();