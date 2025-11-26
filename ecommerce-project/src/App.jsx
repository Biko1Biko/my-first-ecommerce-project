import {Routes, Route} from 'react-router';
import {useState, useEffect} from 'react'
import axios from "axios";

import {HomePage} from "./Pages/home/HomePage.jsx"
import { CheckoutPage } from './Pages/checkout/CheckoutPage.jsx';
import { OrdersPage } from './Pages/home/OrdersPage.jsx';
import {TrackingPage} from "./Pages/TrackingPage.jsx";

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {

    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
      
    }

    fetchAppData();
   
  }, [])

  
  return(
    <Routes>
      <Route path="/" element={<HomePage cart={cart}/>}/>
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="/orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="/track" element={<TrackingPage />}/>
    </Routes>
  );
}

export default  App