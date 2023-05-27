import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"


export interface SortState {
    dataValue: string,
  }

const  dataStore = localStorage.getItem("dataValue")
 

const setItem = <T>(item:T)=>{
    localStorage.setItem("dataValue", JSON.stringify(item))
} 
  
export const DataSlice = createSlice({
    name:"Data",
    initialState:{
        dataValue:  dataStore ? JSON.parse(dataStore) : "",
      },
    reducers:{
        addData:(state,action:PayloadAction<string>)=>{
            state.dataValue = action.payload
            setItem(state.dataValue)
        }
    }
})

export default DataSlice.reducer;
export const { addData } = DataSlice.actions