import { TextInput, View, StyleSheet, Alert, Modal, Text, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from "react";

export default function Form({navigation, modalVisible, setModalVisible}) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginVisible, setLoginVisible] = useState(false)

  function handleLogin() {
      setLoginVisible(true)
  }

  function handleSignup() {
    setLoginVisible(false)
  }


  const login = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password
          }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        })
        .catch(errors => console.log(errors))
        setModalVisible(!modalVisible)
  };

  const signUp = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password
          }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        })
        .catch(errors => console.log(errors))
        setModalVisible(!modalVisible)
        .then(() => navigation.navigate('Home'))
  };

  if (loginVisible == true) {
    return (
      <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}
             onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                  <View>
                     <Text> Enter Username </Text> 
                      <TextInput
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                      />
                      <Text> Password </Text>
                      <TextInput
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                      />
                      <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={login}
                      >
                          <Text style={styles.textStyle}>Login</Text>
                      </Pressable>
                      <TouchableOpacity onPress={ handleSignup } style={{ marginTop: "10%" }}><Text>Don't have an account? Signup</Text></TouchableOpacity>
                  </View>
          </View>
        </View>
      </Modal>
    </View>
    )
  } else {

    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                    <View>
                       <Text> Enter Email </Text> 
                        <TextInput
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        />
                       <Text> Enter Username </Text> 
                        <TextInput
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                        />
                        <Text> Password </Text>
                        <TextInput
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={signUp}
                        >
                            <Text style={styles.textStyle}>Signup</Text>
                        </Pressable>
                        <TouchableOpacity onPress={ handleLogin } style={{ marginTop: "10%" }}><Text>Already have an account? Login</Text></TouchableOpacity>
                    </View>
            </View>
          </View>
        </Modal>
      </View>
    )
        }
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      marginTop: "7%",
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
 
