import { View, Image } from 'react-native';
import Navbar from "./Navbar";
import Date from "./widgets/Date.jsx"
import Markets from "./widgets/Markets.jsx"
import Weather from "./widgets/Weather.jsx"
import {useTailwind} from 'tailwind-rn';

export default function Header() {
  const tailwind = useTailwind();

    return (
      <View>
        <View>
          <Date />
          {/* <Image style={tailwind('max-w-md')}
                 source={{uri: "https://th.bing.com/th/id/R.943758d68df40ac5d07c220244d06a5b?rik=3725Mgh22vIJ0Q&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fChicago_Tribune_logo_black.png&ehk=xspnTleElwBVHhIAjJyfDIXjsJMR741YKwvz79oj6wc%3d&risl=&pid=ImgRaw&r=0"}}/> */}
          <Weather />
        </View>
        <Navbar />
        <Markets />
      </View>
    );
  }