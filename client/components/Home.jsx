import { View, Image } from 'react-native';
import Header from "./Header";
import Content from "./Content";
import axios from 'axios'
import { useEffect, useState } from 'react';


export default function Home() {

    return (
      <View>
          <Header/>
          <Content />
      </View>
    );
  }
  