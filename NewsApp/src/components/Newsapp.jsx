import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../index.css'

const Newsapp = ()=> {
  const [Search, setSearch] = useState("india")
  //api data store
  const [newsData , setnewsData] = useState(null)

  const API_KEY ="0b1bc54220c249cfbd89ee5a041e6074"
//api call
  const getData = async() =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${Search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setnewsData(jsonData.articles);


  }
  useEffect(()=>{
    getData()
  },[])
  

  const handelInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value);

  }

  const userInput = (event) =>{

    setSearch(event.target.value);
  }
  return (
    <div>
        <nav>
            <div>
            <h1>Trending News</h1> 
            </div>
            <ul>
              <a>All News</a>
              <a>Trending</a>
            </ul>
            <div className='searchbar'>

                <input type="text" placeholder="Search news..." value={Search} onChange={handelInput} />
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        <div>
          <p className='head'>Stay Update with TrendyNews</p>
        </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value={"sports"}>Sports</button>
            <button onClick={userInput} value={"politics"}>Poltics</button>
            <button onClick={userInput} value={"entertainmennt"}>Entertainment</button>
            <button onClick={userInput} value={"health"}>Health</button>
            <button onClick={userInput} value={"fitness"}>Fitness</button>
        </div>
        <div>
          {newsData ? <Card data={newsData}/> : null}
    
        </div>
        
    </div>

  )
}

export default Newsapp