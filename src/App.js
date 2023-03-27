import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';

function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element= {<LandingPage/>} />
    </Routes>
    </div>
  );
}

export default App;
