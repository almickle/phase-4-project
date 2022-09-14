import { useState } from 'react';

export default function Navbar() {

  const [textColor, setTextColor] = useState("black")

  function changeColor() {
      setTextColor("red")
  }
    return (
      <span style={{ 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
         }}>
        <h1 onClick={changeColor}>Politics</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Finance</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Business</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Technology</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Sports</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Travel</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Art</h1>
        <h1 style={{ 
        marginLeft: 10,
        marginRight: 10,

         }}>Health</h1>
      </span>
    );
  }
