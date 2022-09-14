import { useState } from 'react';
import { useEffect } from 'react';

export default function Markets() {

  const stockArray = ['PINS', 'MSFT']
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
        // console.log(data.data.symbol);
        setStockInfo([...stockInfo, data.data.symbol])
    })
    })
  }, [])
  
    useEffect(() => {
      console.log("stockInfo")
      console.log(stockInfo)
  }, [stockInfo])

//   useEffect(() => {
//     const encodedParams = new URLSearchParams();
//           encodedParams.append("symbol", array[index]);
//     const options = {
//                 method: 'POST',
//                 headers: {
//                   'content-type': 'application/x-www-form-urlencoded',
//                   'X-RapidAPI-Key': 'cbd7ce40f5msh44a7193529a7120p1133dejsna752f29f4323',
//                   'X-RapidAPI-Host': 'yahoo-finance97.p.rapidapi.com'
//                 },
//                 body: encodedParams
//             };
          
//             fetch('https://yahoo-finance97.p.rapidapi.com/stock-info', options)
//               .then(resp => resp.json())
//               .then(data => {
//                 // console.log(data.data.symbol);
//                 setStockInfo([...stockInfo, data.data.symbol])
//             })
//   }, [])

  const stockElements = stockInfo.map((stock, index, array) => {
    console.log("stock")
    console.log(stock);
    return (
    <h3 key={stock}>{stock}</h3>
    )
  })

    return (
      <span horizontal={ true }>
            {stockElements}
      </span>
    )
  }