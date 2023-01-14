import {useDispatch} from "react-redux"                   //data ko redux m send k liye
import {useSelector} from "react-redux"


export const Home=()=>{

    // const dispatch = useDispatch()
    // const product = useSelector((state)=> state.product.product)
    const data = useSelector((state) => state.products)


    // console.log(data)

return(

    <div>
        <h1>home page</h1>
    </div>
)




}