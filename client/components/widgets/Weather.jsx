import { useEffect, useState } from 'react';
import { Image } from 'react-native';


export default function Weather( { size }) {

  const [ip, setIP] = useState('')
  const [coordinates, setCoordinates] = useState([])

// Get Local IP
useEffect(() => {
      fetch('https://geolocation-db.com/json/3a8c2310-2f38-11ed-ba3a-d59b63bcc8c1')
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCoordinates([data.latitude, data.longitude])})
}, [])

 // setIP(res.data.IPv4)

useEffect(() => {
  console.log("ip");
  console.log(coordinates);
}, [coordinates])


  // useEffect(() => {
  //   fetch(`http://ip-api.com/json/24.48.0.1`)
  // }, [])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=d8d8aef51a04e640d1b493ebac74e354`)
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [coordinates])


    return (
      <Image source={{uri: "https://purepng.com/public/uploads/medium/purepng.com-weather-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596694jxtmh.png"}} 
             style={{
                height: size,
                width: undefined,
                aspectRatio: 1,
                marginRight: 20,
      }}/>
    );
  }