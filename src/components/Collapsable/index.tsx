import React, { useState } from 'react'
import "./Collapsible.scss"
import IconChevronRight from '../Icons/IconChevronRight'
type Props = {
  description: string[]
  name?: string
  type?: "list" | "description",
  className?:string
  style?: React.CSSProperties
}


const Collapsable = ({ description, name, type="description" , style, className }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function toggleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }

  //TODO change description to content 
  return (
    <div className={className} style={style}>
      <button className="collapsible-btn" onClick={toggleCollapsed}>
        {isCollapsed ? <div className='btn-content'><p>{name}</p><IconChevronRight color='white' style={{
          width: "16px",
          transform: 'rotate(90deg)',
          marginRight:"20px",
          marginBottom:"3px"
        }} 
        className='arrow-chevron'
        /></div> : <div className='btn-content'><p>{name}</p><IconChevronRight color='white' style={{
          width: "16px",
          transform: 'rotate(-90deg)',
          marginRight:"20px",
          marginBottom:"3px"
        }} 
        className='arrow-chevron'
        /></div>}
      </button>
      {!isCollapsed && (
        <div className="collapsible-content">
          {type === "list" ? <ul className='collapsable-list'>{description.map((item)=>(<li>{item}</li >))}</ul>: <p className='description'>{description}</p>}
        </div>
      )}
    </div>
  );
}

export default Collapsable