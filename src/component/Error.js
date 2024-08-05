import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
const e = useRouteError()
console.log(e);
  return (
    <div>
        {`${e.status}  ${ e.statusText}`}
    </div>
  )
}

export default Error