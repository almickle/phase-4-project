import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';

export default function Markets() {

  const stockArray = ['PINS', 'MSFT', 'META', 'GOOGL']
  const renderStocks = []
  const [stockInfo, setStockInfo] = useState([])

  useEffect(() => {
    stockArray.forEach((element, index, array) => {
      const encodedParams = new URLSearchParams();
            encodedParams.append("symbol", array[index]);
  
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
          'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
        },
        body: encodedParams
    };
  
    fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.data.symbol);
        setStockInfo(...stockInfo, data)
    })
    })

    setStockInfo(renderStocks)
  }, [])
  
    useEffect(() => {
      console.log(stockInfo)
  }, [stockInfo])

  const stockElements = stockInfo.map((stock) => {
    console.log(stock)
    return (
    <Text key={stock}>Hello</Text>
    )
  })

    return (
      <ScrollView horizontal={ true }>
            {stockElements}
      </ScrollView>
    )
  }