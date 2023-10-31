import { createContext, useState } from "react";

const Context = createContext()

function Provider ({children}){
    const [svet, setSvet] = useState(false)
    const [language, setLanguage] = useState(1)
    return(
        <Context.Provider value={{svet,setSvet,language,setLanguage}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}