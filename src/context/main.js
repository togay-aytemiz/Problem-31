import { createContext, useState} from "react";

const SaleContext = createContext()

const AppProvider = ({children}) => {

    const [discount, setDiscount] = useState("40%")

    const valueToShare = {
        discount,
        setDiscount
      }

    return (
        <SaleContext.Provider value={valueToShare}>{children}</SaleContext.Provider>
    )

}

export { AppProvider };
export default SaleContext;