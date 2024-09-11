
import Display from "./Components/Display"
import Button from "./Components/Button"
import { useState } from "react"
function App() {
  const [calVal, setCalval] = useState("")
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalval("");
    } else if (buttonText === 'CE') {
      setCalval("");

    } else if (buttonText === 'sqr') {
      const result = eval(calVal * calVal);
      setCalval(result);
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalval(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue)
    }
  }



  return (
    <>
      <div className="ml-[40%] mt-[10%] h-[480px] w-[350px] bg-[#253237] p-[20px] rounded-[20px] m-[20px] shadow-cal">
        <Display displayValue={calVal} />
        <Button onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App
