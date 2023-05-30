import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch} from 'react-redux';
import { CurrencySlice } from './features/currencySlice';
import { DataSlice } from './features/dataSlice';
import { BagSlice } from './features/bagSlice';
import { SingleSlice } from './features/singleSlice';
import { PageSlice } from './features/pageSlice';




export const store = configureStore({
  reducer: {
    currency:CurrencySlice.reducer,
    data:DataSlice.reducer,
    bag:BagSlice.reducer,
    single:SingleSlice.reducer,
    page:PageSlice.reducer,
    
    
  },
  
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;