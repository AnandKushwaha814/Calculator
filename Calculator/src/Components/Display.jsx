const Display = ({displayValue}) => {
  return (
    <div>
      <input className='mb-[20px] bg-[#c2dfe3] h-[35px] w-[300px] p-[5px] outline-none rounded-[10px] text-right text-[#1d282b] font-bold text-[18px] border-none shadow-input' type="text" id="display" value={displayValue} readOnly/>
    </div>
  )
}

export default Display
