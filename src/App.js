import React ,{useEffect, useState} from 'react'
import "./App.css"

export default function App() {

  const [result, setResult] = useState([])
  const [searchKeyword,setSearchKeyword]= useState("")
  const [showResult,setShowResults] = useState(false);
  const [cache,setCache] = useState({})

  const fetchData = async () => {
    if(cache[searchKeyword])
    {
      console.log('Cache HIT',searchKeyword)
      setResult(cache[searchKeyword])
      return;
      
    }
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${searchKeyword}`);
    const data = await response.json();
    setResult(data?.recipes)
    setCache({
      ...cache,
      [searchKeyword]: data?.recipes,
    })

  }
  useEffect(()=>{
    const timer = setTimeout(fetchData,300)
    return ()=> clearTimeout(timer);
   
  },[searchKeyword])


  const handleSeachInput = (e) => {
    const { value} = e.target
    setSearchKeyword(value)
  }


  return (
    <div style={{textAlign:'center'}}>
    <h1> Auto complete </h1>
    <div>
      <input  
        onFocus={()=>setShowResults(true)}  
          onBlur={()=>setShowResults(false)}   
          onChange={handleSeachInput} 
          type="text" id="seach" style={{width:'500px'}}/>
      {showResult && (<div className='result-container'>
        {result.map((eachResult)=> (
          <span  
         
          className="result" key={eachResult.id}>
          {eachResult.name}
          </span>  
        ))}
      </div>)
      }
      
    </div>
      
    </div>
  )
}

