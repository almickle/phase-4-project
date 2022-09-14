import login from "./assets/login.jpg"

export default function Login( { size, handleLogin, marginTop } ) {
  
    return (
        <img src={login}
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 40,
                  marginTop: marginTop,
              }}
              onClick={handleLogin}/>
    );
  }