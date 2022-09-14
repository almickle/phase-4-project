// import { Formik } from 'formik';
// import { Button, TextInput, View, StyleSheet } from 'react-native';
// import React, { useState } from "react";
// import { Alert, Modal, Text, Pressable } from "react-native";

// export default function Form({modalVisible, setModalVisible}) {
//     return (
//         <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//             <Formik initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)}>
//                 {({ handleChange, handleBlur, handleSubmit, values }) => (
//                     <View>
//                        <Text> Enter Email </Text> 
//                         <TextInput
//                         // style={textStyle.input}
//                         onChangeText={handleChange('email')}
//                         onBlur={handleBlur ('email')}
//                         value={values.email}
//                         />
//                         <Text> Password </Text>
//                         <TextInput
//                         // style={textStyle.input}
//                         onChangeText={handleChange('password')}
//                         onBlur={handleBlur ('password')}
//                         value={values.password}
//                         />
//                         {/* <Button onPress={handleSubmit} title="Submit" /> */}
//                         <Pressable
//                             style={[styles.button, styles.buttonClose]}
//                             onPress={() => setModalVisible(!modalVisible)}
//                         >
//                             <Text style={styles.textStyle}>Submit</Text>
//                         </Pressable>
//                     </View> )}
//                  </Formik>  
//             </View>
//           </View>
//         </Modal>
//         <Pressable
//           style={[styles.button, styles.buttonOpen]}
//           onPress={() => setModalVisible(true)}
//         >
//           <Text style={styles.textStyle}>Show Modal</Text>
//         </Pressable>
//       </View>
//     );
//   }

//   const styles = StyleSheet.create({
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: 22
//     },
//     modalView: {
//       margin: 20,
//       backgroundColor: "white",
//       borderRadius: 20,
//       padding: 35,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5
//     },
//     button: {
//       borderRadius: 20,
//       padding: 10,
//       elevation: 2
//     },
//     buttonOpen: {
//       backgroundColor: "#F194FF",
//     },
//     buttonClose: {
//       backgroundColor: "#2196F3",
//     },
//     textStyle: {
//       color: "white",
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     modalText: {
//       marginBottom: 15,
//       textAlign: "center"
//     }
//   });
 
