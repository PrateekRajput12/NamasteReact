import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
const e = useRouteError()
// console.log(e);
  return (
    <div>
           error
    </div>
  )
}

export default Error