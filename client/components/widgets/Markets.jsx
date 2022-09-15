import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function Markets() {

  const stockArray = ['PINS', 'MSFT', 'META', 'GOOGL']
  const [stockInfoMSFT, setStockInfoMSFT] = useState(["", 0, ""])
  const [stockInfoPINS, setStockInfoPINS] = useState([])
  const [stockInfoGOOGL, setStockInfoGOOGL] = useState([])

  function processDataMSFT(data) {
    let color 

    if ((data.data[0].Close - data.data[0].Open) >= 0) {
        color = 'green'
    } else {
        color = 'red'
    }
    setStockInfoMSFT(['MSFT', ((data.data[0].Close - data.data[0].Open) / data.data[0].Open).toFixed(2), color])
  }

  useEffect(() => {
      const encodedParams = new URLSearchParams();
            encodedParams.append("symbol", 'MSFT');
            encodedParams.append('period', '1d')
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    fetch('https://yahoo-finance97.p.rapidapi.com/price', options)
      .then(resp => resp.json())
      .then(data => processDataMSFT(data))
  }, [])


  useEffect(() => {
    console.log(stockInfoMSFT);
  }, [stockInfoMSFT])


    return (
      <ScrollView horizontal={ true }>
           <Text style={{fontSize: 20}}>{stockInfoMSFT[0]} <Text style={{color: stockInfoMSFT[2]}}>{stockInfoMSFT[1]}%</Text></Text>
      </ScrollView>
    )
  }

  // <Text style={{fontSize: 20}}>{stockInfoMSFT[0]}<Text style={{color: stockInfoMSFT[2]}}>{stockInfoMSFT[1]}</Text></Text>