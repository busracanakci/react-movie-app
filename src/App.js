import { Routes , Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Bilet from "./pages/Bilet";
import Payment from "./pages/Payment";
import Film1 from "./pages/Film1";
import Film2 from "./pages/Film2";


function App() {
  
  const refreshPage = ()=>{
    setTimeout(()=>{
      window.location.reload(false);
  }, 500);
    }
  return (
    <>
    <nav className="nav-margin nav-width">
      <NavLink to="/" className="{({ isActive })=> isActive && 'aktif'} nav-margin">Anasayfa</NavLink>
      <NavLink to="/bilet" className="nav-margin" style={({isActive}) => ({color: isActive ? 'white' : 'black'})}>Bilet Al</NavLink>
    </nav>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bilet" element={<Bilet/>} render={()=> {refreshPage()}}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/film1" element={<Film1/>}/>
        <Route path="/film2" element={<Film2/>}/>
   </Routes>
    </>
   
  );
}

export default App;
