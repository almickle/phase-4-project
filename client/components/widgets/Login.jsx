import { Image } from 'react-native';

export default function Login( {size} ) {
    return (
      <Image source={{uri: "https://clipground.com/images/icon-login-png-5.jpg"}} 
            style={{
                height: size,
                width: undefined,
                aspectRatio: 184 / 192,
                marginLeft: 20,
            }}/>
    );
  }