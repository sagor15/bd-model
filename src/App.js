
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Cheakout from './Components/Cheakout/Cheakout';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from "./RequireAuth/RequireAuth";


function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/cheakout' element={
            <RequireAuth>
              <Cheakout></Cheakout>
            </RequireAuth>
          }></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App;
