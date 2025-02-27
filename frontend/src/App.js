import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import sunglasses_banner from './Components/Assets/sunglassesbanner.jpeg';
import spectacles_banner from './Components/Assets/spectaclesbanner.jpg';
import cleaners_banner from './Components/Assets/cleanersbanner.jpeg';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>

    {/* shupcategory routes */}
      <Route path='/' element={<Shop/>}/>
      <Route path='/Sunglasses' element={<ShopCategory banner={sunglasses_banner} category='sunglasses'/>}/>
      <Route path='/Spectacles' element={<ShopCategory  banner={spectacles_banner} category='spectacles'/>}/>
      <Route path='/Cleaners' element={<ShopCategory banner={cleaners_banner}  category='cleaners'/>}/>
     

      {/* shop products routes */}
      <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
     <Footer />
    </BrowserRouter>
   
    </div>
  );
}

export default App;
