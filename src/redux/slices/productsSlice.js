import {createSlice} from "@reduxjs/toolkit";
import { addProduct, getAllProducts } from "../../Services/api";
let initialState={ 
    products:[],
    selectedProduct:{},
    errors:''
};
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{ 
        setProducts:(state,action)=>{ 
            state.products=action.payload;
        },
        createProd:(state,action)=>{ 
            addProduct(action.payload);
            state.products=[...state.products,action.payload]
        },
        updateProd:(state,action)=>{ 
            const index=state.products.findIndex((item)=>item.id===action.payload.id)
            if (index!==-1){ 
              state.products[index]=action.payload; 
            }
        },
        deleteProd:(state,action)=>{ 
            const index=state.products.findIndex((item)=> item.id===action.payload.id)
            if (index!==-1){ 
                state.products.splice(index,1)
            }
        },
        selectedProd:(state,action)=>{ 
            state.selectedProd=action.payload;
        },
        unselectedProd:(state,action)=>{ 
            state.selectedProd=null ;
        }

    }
})
export const  fetchproducts=()=>async(dispatch)=>{ 
    const productList=await getAllProducts();
    console.log(productList.data);
    dispatch(setProducts(productList.data));
}
export const { createProd, updateProd, deleteProd, setProducts } =productsSlice.actions;
export default productsSlice.reducer;