import { useState } from 'react';
import { View, Image, Button } from 'react-native';
import Navbar from "./Navbar";
import Login from "./widgets/Login.jsx"
import Markets from "./widgets/Markets.jsx"
import Weather from "./widgets/Weather.jsx"
import Form from "./Form";
import DenBoiz from "./widgets/assets/DenBoiz.png"

export default function Header( { navigation }) {

  const [modalVisible, setModalVisible] = useState(false)

6
  const [headerSize, setHeaderSize] = useState(40)


  function handleClickLogin() {
      setModalVisible(true)
  }

    return (
      <View style={{ alignItems: 'center', marginBottom: "1%" }}>
          <Form navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
          <View style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'row'
                      }}>
          <Weather size={headerSize} />
          <Image style={{
                          height: headerSize,
                          width: undefined,
                          aspectRatio: 6
                        }}
                  source={DenBoiz}/>
          <Login size={headerSize} handleClickLogin={handleClickLogin}/>
          </View>
        <Navbar navigation={navigation} />
        {/* <Button title="I work" onPress={() => navigation.navigate('Health')}></Button> */}
        {/* <Markets /> */}
      </View>
    );
  }