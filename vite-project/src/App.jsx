import Navbar from './components/Navbarfiles/Navbar'
import Men from './components/Menfiles/Men'
import Women from './components/womenfiles/Women'
import Sale from './components/Salefiles/Sale'
import Signin from './components/Signinfiles/Signin'
import Home from "./components/Homefiles/Home"
import Footer from './components/Footerfiles/Footer'
import { Route,Routes,useNavigate } from 'react-router-dom';
import Track from './components/trackorderfiles/Track'
import ProductDetailwomen from './components/productdetailfiles/Productdetailwomen'
import ProductDetailmen from './components/productdetailfiles/Productdetailmen'
import ProductDetailsalemen from './components/productdetailfiles/Productdetailsalemen'
import ProductDetailsalewomen from './components/productdetailfiles/Productdetailsalewomen'



function App() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  // Check if the current path is the Track component, and hide the Navbar and Footer
  const isTrackComponent = currentPath === '/Track';

  return (
    <>
     {!isTrackComponent &&<Navbar/>}
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Men' element={<Men/>}/>
     <Route path="/Men/:id" element={<ProductDetailmen/>}/>
     <Route path='/Women' element={<Women/>}/>
     <Route path="/Women/:id" element={<ProductDetailwomen/>}/>
     <Route path='/Sale' element={<Sale/>}/>
     <Route path="/Sale/salemen/:id" element={<ProductDetailsalemen/>}/>
     <Route path="/Sale/salewomen/:id" element={<ProductDetailsalewomen/>}/>
     <Route path='/Signin' element={<Signin/>}/>
     <Route path='/Track' element={<Track/>}/>
     </Routes>
    { !isTrackComponent &&<Footer/>}
    </>
  )
}

export default App
