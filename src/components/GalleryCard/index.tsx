import { useNavigate } from "react-router-dom"
import { ILogement } from "../Gallery"
import "./GalleryCard.scss"


import React from 'react'

type Props = {
    item: ILogement
}

const GalleryCard = (props: Props) => {
    const navigate = useNavigate()
    return (
        <div 
            id={`card-${props.item.id}`} 
            className='gallery-item'
            style={{
                background: `url(${props.item.cover}) center`,
                backgroundSize: "cover"
            }} 
            onClick={()=>navigate(`/house/${props.item.id}`)}
        >
            <div className="card-text">
                <span>{props.item.title}</span>
            </div>
        </div>
    )
}

export default GalleryCard