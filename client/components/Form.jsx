import { Formik } from 'formik';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import React, { useState } from "react";
import { Alert, Modal, Text, Pressable } from "react-native";

export default function Form({modalVisible, setModalVisible}) {

  // const [user, setUser] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // });


  const signUp = (e) => {
    e.preventDefault();
    // if (password.length < 6) {
    //   alert("Password must be at least 6 characters")
    //   return
    // }
    // if (email.indexOf("@") === -1) {
    //   alert("Your email is not correct")
    //   return
    // }
    // if (email.indexOf(".com") === -1) {
    //   alert("Your email is not correct")
    //   return
    // }


    fetch("http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify({
            username: "michael",
            email: "email",
            password: "password"
          }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        })
        .catch(errors => console.log(errors))
        setModalVisible(!modalVisible)
  };


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
            <Formik initialValues={{ email: '', username: '', password: '' }} onSubmit={values => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                       <Text> Enter Email </Text> 
                        <TextInput
                        // style={textStyle.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur ('email')}
                        value={values.email}
                        />
                       <Text> Enter Username </Text> 
                        <TextInput
                        // style={textStyle.input}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur ('username')}
                        value={values.username}
                        />
                        <Text> Password </Text>
                        <TextInput
                        // style={textStyle.input}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur ('password')}
                        value={values.password}
                        />
                        {/* <Button onPress={handleSubmit} title="Submit" /> */}
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={signUp}
                        >
                            <Text style={styles.textStyle}>Submit</Text>
                        </Pressable>
                    </View> )}
                 </Formik>  
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    );
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
 
