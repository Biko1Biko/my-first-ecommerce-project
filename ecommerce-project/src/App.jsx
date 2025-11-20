import {Routes, Route} from 'react-router';

import {HomePage} from "./Pages/HomePage.jsx"
import { CheckoutPage } from './Pages/CheckoutPage.jsx';

function App() {
  return(
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
    </Routes>
  );
}

export default  App