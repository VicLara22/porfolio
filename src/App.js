import './App.css';
import All from './components/All/All';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
      <div>
        <Routes>
          <Route exact path='/' element={<All/>} />
        </Routes>
     </div>
 
  );
}

export default App;
