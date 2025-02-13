import React from 'react'

export default function ProgressComponent({value}) {

  const sortedValue = value < 100 ? value : 100
  return (
    <div className='progress'>
    <span>{`${sortedValue}%`}</span>
    <div  style={{width:`${sortedValue}%`}}/>
    </div>
  )
}
