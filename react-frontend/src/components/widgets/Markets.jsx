import { useState } from 'react';
import { useEffect } from 'react';

export default function Markets() {

  const stockArray = ['APPL', 'PINS', 'MSFT']
  const [stockInfo, setStockInfo] = useState([])

useEffect(() => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("symbol", stockArray[0]);

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
    console.log('apple');
    console.log(data.data.symbol);
    stockInfo.push(data.data.symbol)
    })
}, [])


useEffect(() => {
        const encodedParams = new URLSearchParams();
        encodedParams.append("symbol", stockArray[1]);

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
    stockInfo.push(data.data.symbol)
})
  }, [])


  const stockElements = stockInfo.map((stock, index, array) => {
    console.log("stock")
    console.log(stock);
    return (
    <h2 key={stock} style={{marginLeft: '15%'}}>{stock}</h2>
    )
  })

    return (
      <span style={{ display: 'flex', flexDirection: 'row' }}>
            {stockElements}
      </span>
    )
  }