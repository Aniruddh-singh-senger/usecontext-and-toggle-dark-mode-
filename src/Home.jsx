import React, { useEffect, useState } from 'react'
import Card from './Card'

const Home = () => {

  const [user, setUser] = useState([])

const getuser = async () => {
  try{
    const getdata = await fetch ('https://jsonplaceholder.typicode.com/albums/1/photos')
    setUser(await getdata.json())
  }catch (error){
console.log("my erroris"+ error);
  }
  
}

  useEffect(()=>{
    getuser()
  },[])
  return (
    <>
    
    <div style={{ width: '60%', margin: '50px auto', textDecoration:'underline' }}>
      <h1 >hello we are using useEffect and fetch this api</h1>
      <p style={{ width: '50%', margin: '10px auto', fontSize: '15px' }}>we are fetch the api with the use of useEffect hook</p>
    </div>
    <div className='card-s'>
    {
      user.map((ce)=>{
     return <Card
     key={ce.id}
     id={ce.id}
     url={ce.url}
     title={ce.title}
     thumbnailUrl={ce.thumbnailUrl}

      
      />})
    }
    
    </div>
    </>
  )
}

export default Home
