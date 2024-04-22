import React from 'react'
import { useContext } from 'react'
import { TargetEmailContext } from '../context/TargetEmailContext'

const TargetEmail = () => {
  const [target]  = useContext(TargetEmailContext);
  return (
    <div><h1>{target}</h1></div>
  )
}

export default TargetEmail