import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/Home';
import HousePage from './pages/House';


export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Homepage/>}/>
      <Route path='/house/:id' element= {<HousePage />}/>
    </Routes>
  </BrowserRouter>
);

export default App;
