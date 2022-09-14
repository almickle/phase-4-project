import Header from "./Header";
import Content from "./Content";
import { useEffect, useState } from 'react';


export default function Home() {

  const [timeState, setTimeState] = useState(0)

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/America/Denver")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setTimeState(data)})
  }, [])

    return (
      <div>
          <Header timeState={timeState}/>
          <Content />
      </div>
    );
  }
  