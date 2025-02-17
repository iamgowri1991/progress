import React from 'react'
const availableInterest =  ['coding','music','javascript','react']


export default function Interest({data, setData}) {

  const handleInterestData =(e,name) => {
    setData({
      ...data,
      interest: data.interest.includes(name) ? data?.interest.filter((data)=> data !== name ) : [...data.interest,name]
    })

  }

  console.log(data?.interest)
  return (
    <div>
      <div>
      {availableInterest?.map((eachInterest)=>{
        return (
          <div>
          <label> {eachInterest}</label>
          <input  onChange={ (e) => handleInterestData(e,eachInterest)} type="checkbox" value={eachInterest} checked={data?.interest.includes(eachInterest)}/>
          </div>
        )

      })}
        

      </div>
    </div>
  )
}
