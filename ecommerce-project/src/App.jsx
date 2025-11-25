import {Routes, Route} from 'react-router';
import {useState, useEffect} from 'react'
import axios from "axios";

import {HomePage} from "./Pages/HomePage.jsx"
import { CheckoutPage } from './Pages/CheckoutPage.jsx';
import { OrdersPage } from './Pages/OrdersPage.jsx';
import {TrackingPage} from "./Pages/TrackingPage.jsx";

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product")
        .then((response) => {
            setCart(response.data)
        })
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