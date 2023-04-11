import React, { useState } from 'react'
import "./Collapsible.scss"
import IconChevronRight from '../Icons/IconChevronRight'
type Props = {
    description: string[]
    name?: string
}

const Collapsable = ({description, name}: Props) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function toggleCollapsed() {
      setIsCollapsed(!isCollapsed);
    }
  //TODO change description to content 
    return (
      <div className="collapsible">
        <button className="collapsible-btn" onClick={toggleCollapsed}>
          {isCollapsed ? <div className='btn-content'><p>{name}</p><IconChevronRight color='white' style={{
            width: "16px",
            transform:  'rotate(90deg)'
          }}/></div>: "Description"}
        </button>
        {!isCollapsed && (
          <div className="collapsible-content">
            <p>{description}</p>
          </div>
        )}
      </div>
    );
}

export default Collapsable