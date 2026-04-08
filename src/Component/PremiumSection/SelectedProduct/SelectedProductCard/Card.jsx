import React from "react";
import { toast } from "react-toastify";

const Card = ({ toolsData , setselectedBuyNow, selectedBuyNow }) => {
  // console.log(toolsData);
  
const handleSelectedTools = () => {
  const exists = selectedBuyNow.find(item => item.id === toolsData.id)

  if (!exists) {
    setselectedBuyNow([...selectedBuyNow, toolsData])
    toast.success(`${toolsData.product_name} is selected`)
  }
 
}

  return (
    <>

      <div className="card w-[90%] h-full  bg-base-100 shadow-sm mb-5 ">
        <div className="card-body  flex flex-col">
          <div className="flex justify-end mb-2">
            <span className="badge badge-xs badge-warning ">
              <p className="font-bold">{toolsData.badge}</p>
            </span>
          </div>

          <div className="flex flex-col items-start justify-start space-y-3 mt-2 ">
            <img src={toolsData.icon_url} alt="kj" />
            <h2 className="text-3xl font-bold">{toolsData.product_name}</h2>
            <span className="text-gray-400">{toolsData.description}</span>
            <span className="flex gap-1 items-center">
              <h2 className="text-xl font-bold "> ${toolsData.price}</h2>
              <p className="text-gray-500"> {toolsData.billing_cycle}</p>
            </span>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
           {
            toolsData.features.map((feature,index) => {
                 return (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                );
            })
           }
          </ul>

          <div className="mt-6 mt-auto">

            <button  onClick={handleSelectedTools} className="btn btn-primary btn-block bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-3xl font-semibold text-white">Buy Now</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
