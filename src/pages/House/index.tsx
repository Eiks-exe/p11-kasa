import React, { useEffect, useState } from 'react'
import AppContainer from '../../components/AppContainer'
import { useParams } from 'react-router-dom'
import AppCaroussel from '../../components/AppCaroussel'
import { ILogement } from '../../components/Gallery'
import { useHouseContext } from '../../utils/dataManager'
import { cp } from 'fs'
import StarRatingRender from '../../components/StarRatingRender'
import Collapsable from '../../components/Collapsable'

type Props = {}


const HousePage = (props: Props) => {
    const url = "/api/logement.json"
    
    const Params = useParams()
    const [logements, setLogements] = React.useState<ILogement[]>([])
    const [currentHouse, setCurrentHouse] = React.useState<ILogement>()

    const fetchData  = async <T,>(): Promise<T> => {
        const res = await fetch(url)
        const result: T = await (res.json() as Promise<T>)
        return result
    }
    
    useEffect(()=>{
        fetchData<ILogement[]>().then((res)=>{
            res.filter((logement)=>{
                if(logement.id === Params.id){
                    setCurrentHouse(logement)
                }
            })
        })
    })

    return (
        <AppContainer>
            <AppCaroussel 
                images={currentHouse?.pictures ? currentHouse.pictures : []}
                imageFormat={{w: "335px" , h: "255px"}}
            ></AppCaroussel>
            <p>
            <span id='title'>{currentHouse?.title}</span>
            </p>
            <span id="location">{currentHouse?.location}</span>
            {currentHouse?.tags.map((tag)=>(
                <div key={tag}>{tag}</div>
            ))}
            <div className='rating&host'>
            <StarRatingRender rating={parseInt(currentHouse?.rating ? currentHouse.rating : "0")}/>
            <div className='hostInfo'>
                <span>
                    {currentHouse?.host.name}
                </span>
                <img src={currentHouse?.host.picture} alt={currentHouse?.host.name} />
            </div>
            </div>
            <Collapsable name='descripton' description={[currentHouse?.description ? currentHouse?.description : ""]}/>
            <Collapsable name='equipement' description={currentHouse?.equipments? currentHouse?.equipments : []}/>
        </AppContainer>
    )
}

export default HousePage