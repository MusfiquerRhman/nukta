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
    <div>
        <label for='input'>Enter Number of cards</label>
        <input type="number" 
            placeholder="Number of Cards to show"
            value={count} 
            onChange={handleInputChange}
            id='input'
            name='input'
            className="border-solid border-2 rounded-lg p-1 m-5 w-96"
        />
    </div>
  )
}

export default InputField;