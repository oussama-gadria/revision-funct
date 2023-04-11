import { combineReducers } from 'redux';
import products  from './slices/productsSlice';
import cartSlice  from './slices/cartSlice';
const reducers = combineReducers({
  products,
  cartSlice
})
export default reducers;