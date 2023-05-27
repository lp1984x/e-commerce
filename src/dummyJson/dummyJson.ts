import axios from 'axios'
import { useEffect, useState } from 'react'
import { IProd} from '../models'
import { useAppSelector } from '../store/store'




export  function useFetchData() {

    const [data, setData]=useState<IProd[]>([]);
    const currentData:string = useAppSelector((state) => state.data.dataValue);
    
    axios.defaults.baseURL = 'https://dummyjson.com/products'
    axios.defaults.params = {limit: 60, skip: 25}
   
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        
        (async function fetchProd() {
            try{
                const res = await axios.get(currentData, {signal})
                setData(res.data.products)
            }catch(err){
                if(axios.isAxiosError(err)){
                    console.log(err.response?.data.errText, 'error')
                } else if(err instanceof Error){console.log(err.message)}
            }
        }())
        return () => controller.abort();
    },[currentData])
return {data}
}

export  function useFetchCategorie() {
    const [categories, setCategories]=useState<string[]>([])


    axios.defaults.baseURL = 'https://dummyjson.com/products'
    axios.defaults.params = {limit: 0}
   

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        (async function fetchCat() {
            try{
                const res = await axios.get<[string]>("/categories", {signal})
                setCategories(res.data)                
            }catch(err){}
        })()
        return () => controller.abort();
       },[])
return {categories}
}