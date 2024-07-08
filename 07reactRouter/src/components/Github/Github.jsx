import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/Hariansh-Singh')
        .then( response => response.json())
        .then( data => {
            console.log(data);
            setData(data)
        })
    }, [])

  return (
    <>
    <div className='bg-gray-300 rounded-full text-3xl py-1'>Github followers : {data.followers} 
    </div>
    <div className='py-2 flex justify-center'>
        <img className='rounded-2xl' src={data.avatar_url} alt="" />
    </div>
    </>
  )
}

export default Github