import React, { useState } from "react";
import SelectedProducts from "./SelectedProduct/SelectedProducts";
import SelectedCard from "./SelectedCard/SelectedCard";
import { toast } from "react-toastify";


const fetchToolsDatas = fetch('/db/ToolsData.json')
.then(res => res.json())


  const PremiumTools = ({selectedBuyNow,setselectedBuyNow ,handleCheckout}) => {
  const [selectProduct, setselectProduct] = useState(false);

  

  const handleRemoveButton = (selectedTool)=>{
    const filterTools = selectedBuyNow.filter(tool => tool.id !== selectedTool.id)
    setselectedBuyNow(filterTools)

   toast.success('Cart is removed',{theme: "dark"})
   
  }

  return (
    <div>
      <div className="text-center mt-10 space-y-2 mb-4">
        <h2 className="text-3xl font-bold ">Premium Digital Tools</h2>
        <p className="text-gray-400">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-5">
        <button
          onClick={() => setselectProduct(false)}
          className={`btn rounded-3xl 
            ${selectProduct === true ? "" : "bg-violet-500"}`}
        >
          Products
        </button>

        <button
          onClick={() => setselectProduct(true)}
          className={`btn rounded-3xl ${selectProduct === true ? "bg-violet-500" : ""} `}
        >
          Card({selectedBuyNow.length})
        </button>
      </div>

            <div>
                {selectProduct === true ?
                   <SelectedCard  selectedBuyNow={selectedBuyNow} handleRemoveButton={handleRemoveButton} handleCheckout={handleCheckout}></SelectedCard> 
                    : 
                     <SelectedProducts selectedBuyNow={selectedBuyNow} setselectedBuyNow={setselectedBuyNow}  fetchToolsDatas={fetchToolsDatas}  ></SelectedProducts>
                }
            </div>

            

    </div>
  );
};

export default PremiumTools;
