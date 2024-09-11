const Button = ({onButtonClick}) => {

  const buttonName = ['C', 'CE', 'sqr', '+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '00', '0', '.', '=']



  return (
    <>
      {/* <div className="cursor-pointer outline-none text-[#e0fbfc] bg-[#253237] w-[50px] h-[50px] m-[10px] font-bold border-none text-[18px] shadow-btn text-center flex justify-evenly items-center"> */}
      <div className="grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-4">
        {
          buttonName.map((buttonName, index) => (
            <button
              key={index}
              className="cursor-pointer outline-none text-[#e0fbfc] bg-[#253237] w-[50px] h-[50px] m-[10px] font-bold border-none text-[18px] shadow-btn text-center hover:text-red-500" onClick={()=> onButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))
        }
      </div>
    </>
  );
}

export default Button
