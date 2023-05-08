import { Routes , Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Bilet from "./pages/Bilet";
import Payment from "./pages/Payment";


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
   </Routes>
    </>
   
  );
}

export default App;
