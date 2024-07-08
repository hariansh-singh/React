import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-300 rounded-full text-3xl py-1'>User : {userid} </div>
  )
}

export default User