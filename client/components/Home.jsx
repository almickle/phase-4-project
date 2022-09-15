import { View } from 'react-native';
import Header from "./Header";
import Content from "./Content";


export default function Home() {

    return (
      <View style={{ backgroundColor: 'white' }}>
          <Header/>
          <Content />
      </View>
    );
  }
  