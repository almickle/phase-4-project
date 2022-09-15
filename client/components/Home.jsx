import { View, Image } from 'react-native';
import Header from "./Header";
import Content from "./Content";
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function Home() {

  const [timeState, setTimeState] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/articles")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setTimeState(data)})
  }, [])
  
  // const url = "https://localhost:3000/articles";
  // axios.get(url, {
  //   timeout: 400000, // default is `0` (no timeout)
  // })
  //   .then((response) => console.log(response.data))
  //   .catch((err) => {
  //     console.log(err.message);
  //   });

    return (
      <View>
          <Header/>
          <Content />
      </View>
    );
  }
  