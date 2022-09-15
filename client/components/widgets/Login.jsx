import { Image, TouchableOpacity } from 'react-native';
// import login from "./assets/login.jpg"

export default function Login( { size } ) {

  function handleLogin() {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        username: "Carter",
        email: "carter@gmail.com",
        password: "GoGoDaddy67!"
      }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    })
};
  
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