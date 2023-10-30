import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [svet, setSvet] = useState(false)
    return(
        <Context.Provider value={{svet,setSvet}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}