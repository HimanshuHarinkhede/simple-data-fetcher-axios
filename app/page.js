'use client'
import React, { useState } from 'react'
import axios from 'axios'


const page = () => {
  const [savedata, setsavedata] = useState([])


  const getUser = async (e)=>{
   let ress = await axios.get("https://jsonplaceholder.typicode.com/users")
   console.log(ress.data)
   setsavedata(ress.data)

  }

  return (
    <>
    <button onClick={(()=>{
      getUser();
    })} className='bg-green-400 text-white mx-20 mt-20 rounded px-3 py-2 text-2xl'>Get Data</button>
    <p  className='mt-20 p-50 text-black bg-green-200 '> {savedata.map((e)=>{
      return <li>{e.name}-- <a href={`/${e.id}`} >Explore</a></li>
    })}</p>
    </>
  )
}

export default page