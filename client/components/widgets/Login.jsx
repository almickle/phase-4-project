import { Image, TouchableOpacity } from 'react-native';

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