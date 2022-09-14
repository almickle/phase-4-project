import { Image } from 'react-native';

export default function Weather( { size }) {
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