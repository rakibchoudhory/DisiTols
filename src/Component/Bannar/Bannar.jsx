import React from "react";

const Bannar = () => {
  return (
    
    <div className="w-11/12 mx-auto  my-10 flex flex-col md:flex-row justify-between gap-6">
        
      {/* left side */}
     <div className="flex  justify-center items-center text-center md:text-start">
         <div className="">

            {/* description */}
        <div className="space-y-4 mb-5">
            <span className="inline-flex items-center gap-2 bg-[#E1E7FF] px-3 py-1 rounded-2xl ">
                <img src="/src/assets/powerd.png" alt="" />
                <p className="bg-transparent inline-block bg-gradient-to-b from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</p>
            </span>
        <h1 className="text-4xl md:text-5xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
        <p className="text-gray-500">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        </div>
        {/* Bannar Button */}
        <div className="flex gap-2 justify-center md:justify-start">
            <button className="btn bg-gradient-to-b from-[#4F39F6] to-[#9514FA] rounded-3xl font-semibold text-white ">Explore Products</button>

            <button className="btn flex items-center border-2 border-violet-600 rounded-4xl text-violet-500"><img src="/src/assets/Play.png" alt="" /> Watch Demo</button>
        </div>
      </div>
     </div>

      {/* right side */}
      <div className=" flex justify-center md:justify-end ">
        <img className="w-[60%] md:w-[75%]  shadow-2xl" src="/src/assets/banner.png" alt="" />
      </div>

    </div>
  );
};

export default Bannar;
