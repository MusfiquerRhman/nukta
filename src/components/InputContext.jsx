import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [numberOfCards, setNumberOfCards] = useState(12);
    
    return (
        <GlobalContext.Provider value={{ numberOfCards, setNumberOfCards}}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);