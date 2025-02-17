import React from 'react'

export default function Profile({data,setData , err}) {

  console.log(err)

  const handleDataChange =(e) => {
    const { name , value } = e.target;
    setData((prev)=> ({...prev,[name]:value}))
    
  }
  return (
    <div>
      <div style={{paddingLeft:'5px'}}>
         <label> Name :  </label>
         <input type='text'  onChange={handleDataChange} value={data?.name} name="name" />
         {err?.name && <span style={{color:'red'}}>{err.name}</span>}
      </div>
      <div>
         <label> age :  </label>
         <input type='number'  onChange={handleDataChange} value={data?.age} name="age" />
      </div>
      <div>
         <label> Email :  </label>
         <input type='text'  onChange={handleDataChange}  value={data?.email} name="email" />
      </div>
    </div>
  )
}
