import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface CurrencyState {
   value:string
    
  }

  /* const  cartFillingStorage = localStorage.getItem("cartFilling")
  const  totalPrice = localStorage.getItem("totalPrice") */

  const initialState: CurrencyState = {
    value:"USD"
   
}

/* const setItem = <T>(item:T)=>{
    localStorage.setItem("cartFilling", JSON.stringify(item))
}

const setPrice = <T>(price:T)=>{
    localStorage.setItem("totalPrice", JSON.stringify(price))
} */

  export const CurrencySlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        setCurrency:(state,action:PayloadAction<string>)=>{
            state.value = action.payload
        },
    }
  })


  export default CurrencySlice.reducer;
export const {setCurrency} = CurrencySlice.actions