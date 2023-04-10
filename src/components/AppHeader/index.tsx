
import Logo  from '../../ressources/kasalogo.svg';
import "./AppHeader.scss";

export interface IAppHeaderProps {
}

export interface IconLogoProps {
   id : string
}


const IconLogo= (props: IconLogoProps) => {
    return (
        <>
            <img src={Logo} alt="kasa" id={props.id}/>
        </>
    )
}


export default function AppHeader (props: IAppHeaderProps) {
  return (
    <header>
        <IconLogo id="logo"/>
        <div className="hstack">
                <a href={'/'}>Accueil</a>
                <a href={'/about'}>A Propos</a>
        </div>
    </header>
  );
}
