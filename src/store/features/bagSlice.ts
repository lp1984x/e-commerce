import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { IProd } from "../../models"

export interface BagState {
    value: boolean,
    bagFilling:IProd[],
    totalPrice:number
    totalQuantity:number
  }

  const bagFillingStorage = localStorage.getItem("bagFilling")
  const  totalPrice = localStorage.getItem("totalPrice")
  const  totalQuantity = localStorage.getItem("totalQuantity")


  const initialState: BagState = {

    value: false,
    bagFilling:bagFillingStorage ? JSON.parse(bagFillingStorage) : [],
    totalPrice:totalPrice ? JSON.parse(totalPrice) : 0,
    totalQuantity:totalQuantity ? JSON.parse(totalQuantity) : 0
}

const setItem = <T>(item:T)=>{
    localStorage.setItem("bagFilling", JSON.stringify(item))
}
const setPrice = <T>(price:T)=>{
    localStorage.setItem("totalPrice", JSON.stringify(price))
}
const setQuantity = <T>(quantity:T)=>{
    localStorage.setItem("totalQuantity", JSON.stringify(quantity))
}

  export const BagSlice = createSlice({
    name:"bag",
    initialState,
    reducers:{
        handleShow:(state,action:PayloadAction)=>{
            state.value = true
        },

        handleHide:(state,action:PayloadAction)=>{
            state.value = false
        },

        addToBag:(state,action:PayloadAction<IProd>)=>{
            const itemIndex = state.bagFilling.findIndex(item => item.id === action.payload.id)
            const tempProduct = {...action.payload, bagQuantity:1, tempPrice: action.payload.price}

            if (itemIndex >= 0){
                // @ts-ignore
                state.bagFilling[itemIndex].bagQuantity++
                state.totalQuantity++
                // @ts-ignore
                state.bagFilling[itemIndex].tempPrice += action.payload.price
                state.totalPrice += action.payload.price
                setItem(state.bagFilling)
                setPrice(state.totalPrice)
                setQuantity(state.totalQuantity)

            }else{
                // @ts-ignore
                state.bagFilling.push(tempProduct)
                state.totalQuantity++
                state.totalPrice += action.payload.price
                setItem(state.bagFilling)
                setPrice(state.totalPrice)
                setQuantity(state.totalQuantity)
            }
            
        },

        delFromBag:(state,action:PayloadAction<IProd>)=>{
            state.bagFilling = state.bagFilling.filter((item)=>item.id !== action.payload.id)
            state.totalPrice -= action.payload.price
            state.totalQuantity--
            setItem(state.bagFilling)
            setPrice(state.totalPrice)
            setQuantity(state.totalQuantity)
            
        },

        incrementQuantity:(state, action:PayloadAction<IProd>)=>{
            const itemIndex =  state.bagFilling.findIndex(item => item.id === action.payload.id)
             // @ts-ignore
             if (state.bagFilling[itemIndex].bagQuantity >= 1){
                // @ts-ignore
                state.bagFilling[itemIndex].bagQuantity++
                // @ts-ignore
                state.bagFilling[itemIndex].tempPrice += action.payload.price
                state.totalPrice += action.payload.price
                state.totalQuantity++
                }
                setItem(state.bagFilling)
                setPrice(state.totalPrice)
                setQuantity(state.totalQuantity)
            },

        decrementQuantity:(state, action:PayloadAction<IProd>)=>{
            const itemIndex =  state.bagFilling.findIndex(item => item.id === action.payload.id)
            // @ts-ignore
            if (state.bagFilling[itemIndex].bagQuantity >= 2){
                // @ts-ignore
                state.bagFilling[itemIndex].bagQuantity--
                // @ts-ignore
                state.bagFilling[itemIndex].tempPrice -= action.payload.price
                state.totalPrice -= action.payload.price
                state.totalQuantity--
                }
                setItem(state.bagFilling)
                setPrice(state.totalPrice)
                setQuantity(state.totalQuantity)
        },
    }
  })


  export default BagSlice.reducer;
export const {handleShow, handleHide, addToBag, delFromBag,incrementQuantity,decrementQuantity} = BagSlice.actions