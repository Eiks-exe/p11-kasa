import React from 'react'
import AppContainer from '../../components/AppContainer'
import AppTopBanner from '../../components/AppTopBanner'
import Collapsable from '../../components/Collapsable'
import "./About.scss"
type Props = {}

const AboutPage = (props: Props) => {
    const aboutData = [
        {name: "Fiabilité",
        description:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {name: "Respect",
        description:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {name: "Service",
        description:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {name: "Sécurité",
        description:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
       ]
  return (
    <AppContainer>
        <AppTopBanner img="/pictures/mountains.png" className='AboutBanner'></AppTopBanner>
        <div className="collapsable-container">
            {aboutData.map((item)=>(
            <Collapsable className='collapsible' key={item.name} name={item.name} description={[item.description]}/>
            ))}
        </div>
    </AppContainer>
  )
}

export default AboutPage