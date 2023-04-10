import * as React from 'react';
import AppContainer from '../../components/AppContainer';
import AppTopBanner from '../../components/AppTopBanner';
import Gallery, { ILogement } from '../../components/Gallery';




export interface IHomepageProps {

}



export function Homepage(props: IHomepageProps) {
	const url = "/api/logement.json"
	const [logements, setLogements] = React.useState<ILogement[]>([])

	React.useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(data => setLogements(data));
			
	}, [])
	return (
		<>
			<AppContainer>
				<div>
					<AppTopBanner
						img='/pictures/mountains.png'
						imageFormat={{ w: "100%", h: "111px" }}
						title='Chez vous, partout et ailleurs'
					/>
					<Gallery data={logements}/>
				</div>
			</AppContainer>
		</>
	);
}
