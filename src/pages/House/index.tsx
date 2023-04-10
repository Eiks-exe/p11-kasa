import React from 'react'
import AppContainer from '../../components/AppContainer'
import { useParams } from 'react-router-dom'

type Props = {}

const HousePage = (props: Props) => {
    const id = useParams()
    console.log(id)
  return (
    <AppContainer>
       
    </AppContainer>
  )
}

export default HousePage