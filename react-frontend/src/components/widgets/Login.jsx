import login from "./assets/login.jpg"

export default function Login( { size, handleLogin } ) {
  
    return (
        <img src={login}
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 40,
                  marginTop: 60,
              }}
              onClick={handleLogin}/>
    );
  }