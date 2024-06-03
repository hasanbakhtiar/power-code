import React from 'react'
import { listType } from '../types/listtype'

const List:React.FC<listType> = ({id,title,desc}) => {
  return (
    <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{desc}</li>
    </ul>
  )
}

export default List