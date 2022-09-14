

export default function Login( { size, handleLogin } ) {
  
    return (
        <img src="https://clipground.com/images/icon-login-png-5.jpg"
              style={{
                  height: size,
                  width: undefined,
                  aspectRatio: 184 / 192,
                  marginLeft: 20,
              }}
              onPress={handleLogin}/>
    );
  }