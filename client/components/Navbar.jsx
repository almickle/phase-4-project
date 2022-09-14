import { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';


export default function Navbar() {

  const [textColor, setTextColor] = useState("black")

  function changeColor() {
      setTextColor("red")
  }
    return (
      <ScrollView horizontal={ true } style={{ margin: 4 }}>
        <Text style={ styles.textStyle } onPress={changeColor}>Politics</Text>
        <Text style={ styles.textStyle }>Finance</Text>
        <Text style={ styles.textStyle }>Business</Text>
        <Text style={ styles.textStyle }>Technology</Text>
        <Text style={ styles.textStyle }>Sports</Text>
        <Text style={ styles.textStyle }>Travel</Text>
        <Text style={ styles.textStyle }>Art</Text>
        <Text style={ styles.textStyle }>Health</Text>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
      textStyle: {
        color: "black",
        fontSize: 20,
        marginTop: 10,
        margin: 4,
      }
  })

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     padding: 24,
  //     backgroundColor: "#eaeaea"
  //   },
  //   title: {
  //     marginTop: 16,
  //     paddingVertical: 8,
  //     borderWidth: 4,
  //     borderColor: "#20232a",
  //     borderRadius: 6,
  //     backgroundColor: "#61dafb",
  //     color: "#20232a",
  //     textAlign: "center",
  //     fontSize: 30,
  //     fontWeight: "bold"
  //   }
  // });