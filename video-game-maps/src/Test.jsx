import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {

    const { id } = useParams();


  return (
    <div>
      <p>WOWOWOWOWOWOWOWOWOWOWOWOWOWOWOWOW WE ARE AT {id}</p>
    </div>
  )
}

export default Test
