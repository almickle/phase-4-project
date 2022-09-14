import { useState } from 'react';
import Navbar from "./Navbar";
import Login from "./widgets/Login.jsx"
import Markets from "./widgets/Markets.jsx"
import Weather from "./widgets/Weather.jsx"
import SignUpForm from "./SignUpForm";

export default function Header() {

  const [modalVisible, setModalVisible] = useState(false)


  const headerSize = 80
  const marginTop = 25
  const marginSide = 600


  function handleLogin() {
    console.log(modalVisible)
      setModalVisible(true)
  }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3%' }}>
          <SignUpForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
          <div style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'row',
                          marginTop: 0,
                      }}>
          <Weather size={headerSize} marginTop={marginTop} marginRight={marginSide}/>
          <h1 style={{fontSize: 50}}>𝕯𝖊𝖓 𝕭𝖔𝖎𝖟 𝕿𝖎𝖒𝖊𝖘</h1>
          <Login size={headerSize} handleLogin={handleLogin} marginTop={marginTop} marginLeft={marginSide}/>
          </div>
          <div style={{height: 2, backgroundColor: "black", width: '80%',}}></div>
        <Navbar />
        {/* <Markets /> */}
      </div>
    );
  }

  // {/* <img style={{
  //                         height: headerSize,
  //                         width: undefined,
  //                         aspectRatio: 6
  //                       }}
  //                 src="https://th.bing.com/th/id/R.943758d68df40ac5d07c220244d06a5b?rik=3725Mgh22vIJ0Q&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f05%2fChicago_Tribune_logo_black.png&ehk=xspnTleElwBVHhIAjJyfDIXjsJMR741YKwvz79oj6wc%3d&risl=&pid=ImgRaw&r=0"/> */}