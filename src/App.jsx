
import { useState } from 'react'
import './App.css'
import Bannar from './Component/Bannar/Bannar'
import Navber from './Component/Navber/Navber'
import PremiumTools from './Component/PremiumSection/PremiumTools'
import Rating from './Component/rating/rating'


function App() {
  const [selectedBuyNow,setselectedBuyNow] = useState([]);
  console.log(selectedBuyNow);
  const handleCheckout = () => {
    setselectedBuyNow([])
  }

  return (
    <>

   <Navber selectedBuyNow={selectedBuyNow}></Navber>
    <Bannar></Bannar>
    <Rating></Rating>

    <PremiumTools selectedBuyNow={selectedBuyNow} setselectedBuyNow={setselectedBuyNow} handleCheckout={handleCheckout}></PremiumTools>
    </>
  )
}

export default App
