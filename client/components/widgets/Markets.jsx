import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function Markets() {

  const stockArray = ['PINS', 'MSFT', 'META', 'GOOGL']
  const [stockInfoMSFT, setStockInfoMSFT] = useState(["", 0, "", ""])
  const [stockInfoPINS, setStockInfoPINS] = useState(["", 0, "", ""])
  const [stockInfoGOOGL, setStockInfoGOOGL] = useState(["", 0, "", ""])


  // MSFT 
  function processDataMSFT(data) {
    const currentPrice = data.data[1].Close
    const closingPrice = data.data[0].Close

    let color
    let plus

    if ((currentPrice - closingPrice) >= 0) {
        color = 'green'
        plus = "+"
    } else {
        color = 'red'
        plus = ""
    }
    console.log(data);
    setStockInfoMSFT(['MSFT', (((currentPrice - closingPrice) / closingPrice) * 100).toFixed(2), color, plus])
  }

  useEffect(() => {
      const encodedParams = new URLSearchParams();
            encodedParams.append('start', '2022-09-14')
            encodedParams.append("symbol", 'MSFT');
            encodedParams.append('end', '2022-09-16')
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    fetch('https://yahoo-finance97.p.rapidapi.com/price-customdate', options)
      .then(resp => resp.json())
      .then(data => processDataMSFT(data))
  }, [])


  // PINS

  function processDataPINS(data) {
    const currentPrice = data.data[1].Close
    const closingPrice = data.data[0].Close

    let color
    let plus

    if ((currentPrice - closingPrice) >= 0) {
        color = 'green'
        plus = "+"
    } else {
        color = 'red'
        plus = ""
    }
    setStockInfoPINS(['PINS', (((currentPrice - closingPrice) / closingPrice) * 100).toFixed(2), color, plus])
  }

  useEffect(() => {
      const encodedParams = new URLSearchParams();
            encodedParams.append('start', '2022-09-14')
            encodedParams.append("symbol", 'PINS');
            encodedParams.append('end', '2022-09-16')
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    fetch('https://yahoo-finance97.p.rapidapi.com/price-customdate', options)
      .then(resp => resp.json())
      .then(data => processDataPINS(data))
  }, [])

  // GOOGL

  function processDataGOOGL(data) {
    const currentPrice = data.data[1].Close
    const closingPrice = data.data[0].Close

    let color
    let plus

    if ((currentPrice - closingPrice) >= 0) {
        color = 'green'
        plus = "+"
    } else {
        color = 'red'
        plus = ""
    }
    setStockInfoGOOGL(['GOOGL', (((currentPrice - closingPrice) / data.data[1].Close) * 100).toFixed(2), color, plus])
  }

  useEffect(() => {
      const encodedParams = new URLSearchParams();
            encodedParams.append('start', '2022-09-14')
            encodedParams.append("symbol", 'GOOGL');
            encodedParams.append('end', '2022-09-16')
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    fetch('https://yahoo-finance97.p.rapidapi.com/price-customdate', options)
      .then(resp => resp.json())
      .then(data => processDataGOOGL(data))
  }, [])



    return (
      <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{display: 'flex', flexDirection: 'row', marginRight: 12}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 4}}>{stockInfoMSFT[0]}</Text><Text style={{fontSize: 20, fontWeight: 'bold', color: stockInfoMSFT[2]}}>{stockInfoMSFT[3]}{stockInfoMSFT[1]}%</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginRight: 12}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 4}}>{stockInfoPINS[0]}</Text><Text style={{fontSize: 20, fontWeight: 'bold', color: stockInfoPINS[2]}}>{stockInfoPINS[3]}{stockInfoPINS[1]}%</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', marginRight: 12}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', marginRight: 4}}>{stockInfoGOOGL[0]}</Text><Text style={{fontSize: 20, fontWeight: 'bold', color: stockInfoGOOGL[2]}}>{stockInfoGOOGL[3]}{stockInfoGOOGL[1]}%</Text>
          </View>
      </View>
    )
  }

  // <Text style={{fontSize: 20}}>{stockInfoMSFT[0]}<Text style={{color: stockInfoMSFT[2]}}>{stockInfoMSFT[1]}</Text></Text>