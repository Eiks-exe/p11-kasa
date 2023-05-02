import React, { useEffect } from 'react'
import AppContainer from '../../components/AppContainer'
import { useParams } from 'react-router-dom'
import AppCaroussel from '../../components/AppCaroussel'
import { ILogement } from '../../components/Gallery'
import StarRatingRender from '../../components/StarRatingRender'
import Collapsable from '../../components/Collapsable'
import './House.scss'
import NotFoundPage from '../NotFound'


type Props = {}


const HousePage = (props: Props) => {
    const url = "/api/logement.json"

    const Params = useParams()
    const [currentHouse, setCurrentHouse] = React.useState<ILogement>()

    const fetchData = async <T,>(): Promise<T> => {
        const res = await fetch(url)
        const result: T = await (res.json() as Promise<T>)
        return result
    }

    useEffect(() => {
        fetchData<ILogement[]>().then((res) => {
            const filteredHouse = res.filter((logement) => logement.id === Params.id)[0]
            setCurrentHouse(filteredHouse)
        })
    })
    const currentHousePage = () => {
        return (
            <AppContainer>
                <AppCaroussel
                    images={currentHouse?.pictures ? currentHouse.pictures : []}
                    imageFormat={{ w: "100%", h: "" }}
                ></AppCaroussel>
                <div className="infoContainer">
                    <div className="title-location-tag">
                        <span id='title'>{currentHouse?.title}</span><br />
                        <span id="location">{currentHouse?.location}</span>
                        <div className="tagsContainer">
                            {currentHouse?.tags.map((tag) => (
                                <div key={tag} className='tag'>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className='rating-host'>
                        <StarRatingRender rating={parseInt(currentHouse?.rating ? currentHouse.rating : "0")} className='starRate' />
                        <div className='hostInfo'>
                            <span>
                                {currentHouse?.host.name}
                            </span>
                            <img src={currentHouse?.host.picture} alt={currentHouse?.host.name} />
                        </div>
                    </div>
                </div>
                <div className="house-description">
                    <Collapsable name='descripton' description={[currentHouse?.description ? currentHouse?.description : ""]} className='collapsible' />
                    <Collapsable name='equipement' type="list" description={currentHouse?.equipments ? currentHouse?.equipments : [] }  className='collapsible'/>
                </div>
            </AppContainer>

        )
    }
    return (
            <>
                {currentHouse? currentHousePage() : <NotFoundPage/>}
            </>
    )
}

export default HousePage