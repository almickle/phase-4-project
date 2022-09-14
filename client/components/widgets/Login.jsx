import { Image, TouchableOpacity } from 'react-native';

export default function Login( { size, handleLogin } ) {
  
    return (
      <TouchableOpacity onPress={handleLogin}>
        <Image source={{uri: "https://clipground.com/images/icon-login-png-5.jpg"}} 
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 20,
              }}/>
      </TouchableOpacity>
    );
  }