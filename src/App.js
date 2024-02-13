import Header from "./Component/Header";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Search from "./Component/Search";
import Contectus from "./Component/contect";
import Paynow from "./Component/Paynow";
import Aboutus from "./Component/Aboutus";
import Cart from "./Component/Cart";
import Filter from "./Component/Filter";
import Wishlist from "./Component/Wishlist";
function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/filter' element={<Filter/>}/>
          <Route path='/contectus' element={<Contectus/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/paynow' element={<Paynow/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
