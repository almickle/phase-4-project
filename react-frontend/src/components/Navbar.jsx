import { useState } from 'react';

export default function Navbar() {

  const [textColor, setTextColor] = useState("black")

  function changeColor() {
      setTextColor("red")
  }
    return (
      <span style={{ margin: 4 }}>
        <h1 onPress={changeColor}>Politics</h1>
        <h1>Finance</h1>
        <h1>Business</h1>
        <h1>Technology</h1>
        <h1>Sports</h1>
        <h1>Travel</h1>
        <h1>Art</h1>
        <h1>Health</h1>
      </span>
    );
  }

  // const styles = StyleSheet.create({
  //     h1Style: {
  //       color: "black",
  //       fontSize: 20,
  //       marginTop: 10,
  //       margin: 4,
  //     }
  // })

//   style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
// style={ styles.h1Style }
