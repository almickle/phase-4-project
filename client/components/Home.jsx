import { View } from 'react-native';
import Header from "./Header";
import Content from "./Content";


export default function Home({ navigation }) {

    return (
      <View style={{ backgroundColor: 'white' }}>
          <Header navigation={navigation} />
          <Content />
      </View>
    );
  }
  