import Header from "./Component/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Search from "./Component/Search";
import Contectus from "./Component/contect";
import Aboutus from "./Component/Aboutus";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/contectus' element={<Contectus/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
