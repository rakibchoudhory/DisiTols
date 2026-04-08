import React, { use, } from "react";
import Card from "./SelectedProductCard/Card";


const SelectedProducts = ({ fetchToolsDatas ,selectedBuyNow ,setselectedBuyNow }) => {
  const ToolsDatas = use(fetchToolsDatas);
  // console.log(ToolsDatas);

 
  return (
    <>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-y-5">
        {ToolsDatas.map((toolsData) => {
        return (
          
            <Card setselectedBuyNow={setselectedBuyNow} selectedBuyNow={selectedBuyNow} key={toolsData.id} toolsData={toolsData} ></Card>

        );
      })}
     
      </div>
    </>
  );
};

export default SelectedProducts;
