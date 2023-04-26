import React from 'react'
import AppContainer from '../../components/AppContainer'
import notFoundSvg from "../../ressources/404.svg"
import "./NotFound.scss"
import { Link } from 'react-router-dom'
type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <AppContainer>
        <div className='notFound_vstack'>
          <img src={notFoundSvg} alt="404" />
          <p className="notFound_text">{"Oups! La page que vous demandez n'existe pas."}</p>
            <Link to='/' className='notFound_link'>Retourner sur la page d’accueil</Link>
        </div>
    </AppContainer>
  )
}

export default NotFoundPage