import { Image, TouchableOpacity } from 'react-native';
// import login from "./assets/login.jpg"

export default function Login( { size, handleLogin } ) {
  
  
    return (
      <TouchableOpacity onPress={handleLogin}>
        <Image 
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 20,
              }}/>
      </TouchableOpacity>
    );
  }