import login from "./assets/login.jpg"

export default function Login( { size, handleLogin, marginTop, marginLeft } ) {
  
    return (
        <img src={login}
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: marginLeft,
                  marginTop: marginTop,
              }}
              onClick={handleLogin}/>
    );
  }