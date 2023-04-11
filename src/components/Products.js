import {  useState } from "react";
import Product from "./Product";
import {getAllProducts} from '../Services/api'
import { useSelector } from "react-redux";
function Products() {
    const products=useSelector((state)=>state.products.products)
    console.log(products);
    const [show,setShow]=useState(false)
    const buy=(product)=>{ 
        if(product.quantity>0){ 
            product.quantity--;
            setShow(true)
            setTimeout(()=>{ 
              setShow(false)
            },2000)
        }
    };
    return ( 
        <>
        {products.map((product)=>(
            <Product product={product} buy={buy}></Product>
        ))}
        </>
     );
}

export default Products;