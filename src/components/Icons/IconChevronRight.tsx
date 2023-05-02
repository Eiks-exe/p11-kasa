import React, { DetailedHTMLProps } from 'react'
import ChevronIcon from "../../ressources/Icons/ChevronIcon.svg"
type Props = {
    style?:  React.CSSProperties
    color?:string
    className?: string
}

const IconChevronRight = (props: Props) => {
  return (
   <img src={ChevronIcon} alt="#" style={props.style} color={props.color} className={props.className}/>
  )
}

export default IconChevronRight