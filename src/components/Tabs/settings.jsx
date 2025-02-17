import React from 'react'

export default function Setting({data, setData}) {
  return (
    <div>
   <div>
    <label>Dark</label>
    <input type="radio"  onChange={()=> setData({
      ...data,
      theme: "dark"
    })}
     name="dark" checked={data?.theme === "dark"}/>
   </div>
   <div>
    <label>Light</label>
    <input onChange={()=> setData({
      ...data,
      theme: "light"
    })} type="radio"  name="light" checked={data?.theme === "light"}/>
   </div>
      
    </div>
  )
}
