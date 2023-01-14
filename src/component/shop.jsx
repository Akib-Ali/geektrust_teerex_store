import {useDispatch} from "react-redux"                   //data ko redux m send k liye
import { useEffect } from "react"
import {useSelector} from "react-redux"
import { getdata } from "../Redux/Products/action"

export const Shop=()=>{
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.product.products)
 console.log(products)


useEffect(() => {
       
    if(products?.length === 0){
        dispatch(getdata())
    }   
},[dispatch,products.length])




return(
    <div>
        <h1>Shop Page</h1>
        <p>jkkkk</p>
        {products.lenght > 0 && products.map((elem)=>{
            return (
                <h1>{elem.name}</h1>
            )
        
        }
        )}
    </div>
)


}