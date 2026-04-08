


const SelectedCard = ({selectedBuyNow,handleRemoveButton ,handleCheckout}) => {
    console.log(selectedBuyNow);

    const total = selectedBuyNow.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <div className="w-11/12 mx-auto border-2 border-gray-200 rounded-lg">
            <div className="p-5">
                <h2 className="font-bold">Your Cart</h2>
                {/* Cart */}
          {
            selectedBuyNow.map(selectedTool => {
                // console.log(selectedTool);
                return(
                    <div key={selectedTool.id} className="bg-sky-50 p-3 mt-3 rounded-md flex justify-between items-center">
                        {/* right side */}
                        <div className="flex items-center gap-4">
                        <div>
                              <img src={selectedTool.icon_url} alt="" />
                        </div>
                        <div className="">
                            <h3>{selectedTool.product_name}</h3>
                            <p className="text-gray-500">${selectedTool.price}</p>
                        </div>
                        </div>

                        {/* left side  */}
                        <div>
                    <p onClick={ () =>  handleRemoveButton (selectedTool)} className="btn text-red-500">Remove</p>
                        </div>
                    </div>
                );
            })
          }
          <div className="flex justify-between py-4">
            <span>
                <p className="text-gray-500">Total: </p>
            </span>

            <span>
                <p className="font-bold">${total}
                    
                </p>
            </span>
          </div>
          <button onClick={handleCheckout} className="btn w-full rounded-3xl bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white">Proceed to Checkout</button>
            </div>

        </div>
    );
};

export default SelectedCard;