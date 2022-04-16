
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
        </Routes>
        
    </div>
  )
}

export default App;
