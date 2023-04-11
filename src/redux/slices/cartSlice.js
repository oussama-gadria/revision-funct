import {createSlice} from "@reduxjs/toolkit";
let initialState={ 
    CartList:[],
    selectedProduct:{},
    errors:''
};
const cartSlice=createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
       selectedProduct:(state,action)=>{ 
          state.selectedProduct=action.payload
        },
        unselectedProduct:(state,action)=>{ 
          state.selectedProduct=null;
        },
        addProductToBasket:(state,action)=>{ 
          state.CartList=[...state.CartList,action.payload]
          console.log(state.CartList)
        }
     }
})
export const { selectedProduct, unselectedProduct, addProductToBasket } =cartSlice.actions;
export default cartSlice.reducer;