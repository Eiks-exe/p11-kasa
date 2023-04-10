import React from 'react'
import "./Gallery.scss"
import GalleryCard from '../GalleryCard';

export interface ILogement{
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

type Props = {
    data?: ILogement[]
}
const Gallery = (props: Props) => {
  return (
    <div id='container'>
     {props.data?.filter( (item:ILogement)=> item.title.toLowerCase()).map((item:ILogement)=> (
        <GalleryCard item={item}/>
     ))}
    </div>
  )
}

export default Gallery