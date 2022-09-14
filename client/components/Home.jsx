import { View, Image } from 'react-native';
import Header from "./Header";
import Content from "./Content";
import axios from 'axios'


export default function Home() {
  
  const url = "http://localhost:3000/articles";
  axios.get(url, {
    timeout: 400000, // default is `0` (no timeout)
  })
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.log(err.message);
    });

    return (
      <View>
          <Header/>
          <Content />
      </View>
    );
  }
  