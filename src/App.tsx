import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Homepage } from './pages/Home';
import HousePage from './pages/House';
import NotFoundPage from './pages/NotFound';
import AboutPage from './pages/About';


export const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Homepage/>}/>
      <Route path='/house/:id' element= {<HousePage />}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="*" element= {<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
