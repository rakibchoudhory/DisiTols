
import { useState } from 'react'
import './App.css'
import Bannar from './Component/Bannar/Bannar'
import Navber from './Component/Navber/Navber'
import PremiumTools from './Component/PremiumSection/PremiumTools'
import Rating from './Component/rating/rating'
import { toast, ToastContainer } from 'react-toastify'


function App() {
  const [selectedBuyNow,setselectedBuyNow] = useState([]);
  console.log(selectedBuyNow);
  const handleCheckout = () => {
    setselectedBuyNow([])
    selectedBuyNow.length ===0 ? '' : toast.success('All cart Removed',{theme: "colored"})
  }

  return (
    <>

   <Navber selectedBuyNow={selectedBuyNow}></Navber>
    <Bannar></Bannar>
    <Rating></Rating>

    <PremiumTools selectedBuyNow={selectedBuyNow} setselectedBuyNow={setselectedBuyNow} handleCheckout={handleCheckout}></PremiumTools>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
