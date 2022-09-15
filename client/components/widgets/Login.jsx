import { Image, TouchableOpacity } from 'react-native';
import login from "./assets/login.jpg"

export default function Login( { size, handleClickLogin } ) {
  
  
    return (
      <TouchableOpacity onPress={handleClickLogin}>
        <Image source={login}
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 20,
              }}/>
      </TouchableOpacity>
    );
  }