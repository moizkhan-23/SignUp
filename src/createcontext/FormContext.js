
import {createContext, useContext} from "react"

export const FormContext = createContext({

})


export const useProvider =( ) => {
    return useContext(FormContext )
}

export const FormProvider =FormContext.Provider