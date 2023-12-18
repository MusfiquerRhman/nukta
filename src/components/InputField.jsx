import { useEffect, useState } from "react";
import { useGlobalContext } from "./InputContext";

const InputField = () => {
  const [count, setCount] = useState(12)
    const {setNumberOfCards } = useGlobalContext();

    const handleInputChange = (event) => {
      setCount(parseInt(event.target.value));
    };

    useEffect(() => {
      if(count > 0)
        setNumberOfCards(count)
      else 
        setNumberOfCards(0)
    }, [count, setNumberOfCards])
    
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-5">
        <label className="md:mr-3">Enter the Number of cards</label>
        <input type="number" 
            placeholder="Number of Cards to show"
            value={count} 
            onChange={handleInputChange}
            className="border-solid border-2 rounded-lg p-1 w-72 my-1"
        />
    </div>
  )
}

export default InputField;