import { useState } from 'react';
import { View, Image } from 'react-native';
import Navbar from "./Navbar";
import Login from "./widgets/Login.jsx"
import Markets from "./widgets/Markets.jsx"
import Weather from "./widgets/Weather.jsx"
import Form from "./Form";

export default function Header() {

  const [modalVisible, setModalVisible] = useState(false)

6
  const [headerSize, setHeaderSize] = useState(40)


  function handleLogin() {
      setModalVisible(true)
  }

    return (
      <View style={{
                      alignItems: 'center',
                    }}>
          <Form modalVisible={modalVisible} setModalVisible={setModalVisible} />
          <View style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 60,
                      }}>
          <Weather size={headerSize} onPress={() => setModalVisible(modalVisible)} />
          <Image style={{
                          height: headerSize,
                          width: undefined,
                          aspectRatio: 6
                        }}
                  source={{ uri: "https://th.bing.com/th/id/R.943758d68df40ac5d07c220244d06a5b?rik=3725Mgh22vIJ0Q&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fChicago_Tribune_logo_black.png&ehk=xspnTleElwBVHhIAjJyfDIXjsJMR741YKwvz79oj6wc%3d&risl=&pid=ImgRaw&r=0"}}/>
          <Login size={headerSize} handleLogin={handleLogin}/>
          </View>
        <Navbar />
        {/* <Markets /> */}
      </View>
    );
  }