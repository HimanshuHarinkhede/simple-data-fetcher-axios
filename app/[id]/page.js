'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = ({ params }) => {
  const { id } = params;
  const [savedata, setsavedata] = useState([])

  const getUser = async (e) => {
    let ress = await axios.get("https://jsonplaceholder.typicode.com/users/" + id)

    setsavedata(ress.data)

  }
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='bg-green-200  text-black mt-60 mx-60 flex justify-center items-center'>{JSON.stringify(savedata)}</div>
  )
}

export default page