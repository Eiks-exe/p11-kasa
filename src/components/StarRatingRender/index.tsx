import solidStar from "../../ressources/Icons/SolidStar.svg"
import emptyStar from "../../ressources/Icons/EmptyStar.svg"
type Props = {
    rating: number
    starSize?: {w: string, h: string}
    className?:string
}

const StarRatingRender = ({rating, starSize, className}: Props) => {
   const maxRating = 5
   const stars = [] 
  for (let i = 0; i < maxRating; i++) {
    if(i < rating ){
        stars.push(<img src={solidStar} width={starSize?.w} height={starSize?.w} key={i} className={className}/>)
    } else {
        stars.push(<img src={emptyStar} width={starSize?.w} height={starSize?.w} key={i} className={className}/>)
    }    
  }
   return (
    <div>{stars}</div>
  )
}

export default StarRatingRender