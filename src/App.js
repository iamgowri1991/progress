import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressComponent from "./components/progress";
 

export default function App() {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   let a = window.setInterval(() => {
  //     setValue((prev) => prev + 5);
  //   }, 100);
  //   return () => window.clearInterval(a);
  // }, []);

  return (
    <div className="app">
      <div> Progress Bar</div>
     <button onClick={()=>setValue(prev => prev+5)}> Increment by 5 </button>
     <button  onClick={()=>setValue(prev => prev-5)}> Decrement by 5 </button>
      <ProgressComponent value={value} />
    </div>
  );
}
