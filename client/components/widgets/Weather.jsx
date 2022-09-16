import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import lightning from "./assets/weather/lightning.jpg"
import sunny from "./assets/weather/sunny.jpg"
import snowy from "./assets/weather/snowy.jpg"
import windy from "./assets/weather/windy.jpg"
import partly_cloudy from "./assets/weather/partly_cloudy.jpg"
import rainy from "./assets/weather/rainy.jpg"

export default function Weather( { size }) {

const [coordinates, setCoordinates] = useState([])
const [weatherIcon, setWeatherIcon] = useState("")

function processWeatherData(data) {
  switch (data) {

    case "Clouds":
        setWeatherIcon(partly_cloudy)
      break

    case "Rain":
        setWeatherIcon(rainy)
      break

    case "Snow":
        setWeatherIcon(snowy)
      break

    case "Clouds":

      break

    case "Clouds":
      
      break

    case "Clouds":
      
      break

    default: 

      break
  }
}

// Get latitude and longitude
useEffect(() => {
      fetch('https://geolocation-db.com/json/3a8c2310-2f38-11ed-ba3a-d59b63bcc8c1')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCoordinates([data.latitude, data.longitude])})
      .catch(errors => console.log(errors))
}, [])

// Get weather
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d8d8aef51a04e640d1b493ebac74e354`)
    .then(resp => resp.json())
    .then(data => {processWeatherData(data.weather[0].main); console.log(data)})
    .catch(errors => console.log(errors))
  }, [coordinates])



    return (
      <Image source={weatherIcon} 
             style={{
                height: size + 10,
                width: undefined,
                aspectRatio: 1,
                marginRight: 20,
                marginTop: -5
      }}/>
    );
  }