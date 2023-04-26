
import Logo  from '../../ressources/kasalogo.svg';
import "./AppHeader.scss";

export interface IAppHeaderProps {
}

export interface IconLogoProps {
   id : string
   color?: string
   style?:React.CSSProperties
}


export const IconLogo= ({id, color, style}: IconLogoProps) => {
    const className :string = "svg-"+color
    return (
        <>
            <img src={Logo} alt="kasa" id={id} color={color} style={style} className={className}/>
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
