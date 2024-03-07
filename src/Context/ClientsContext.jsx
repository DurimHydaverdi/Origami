import React, { createContext } from "react";
import data_product from "../Components/Assets/data";

export const ClientsContext = createContext(null);

const ClientsContextProvider = (props) => {
    
    const contextValue = {data_product};

    return (
        <ClientsContext.Provider value={contextValue}>
            {props.children}
        </ClientsContext.Provider>
        
    )
}

export default ClientsContextProvider;