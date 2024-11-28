import React from 'react'
import { useState } from 'react'

interface Props{
    children: string,
    onClick: () => void,
    color?: string
}
const button = ({ children, onClick, color='info'}: Props) => {
  return (
    <div>
      <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
    </div>
  )
}

export default button

