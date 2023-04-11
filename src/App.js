import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom"
import React, { Suspense } from 'react';
import NavBar from './components/NavBar';
import Loading from './components/Loading';
import AddProduct from './components/addProduct';
import UpdateProduct from './components/UpdateProduct';
import { fetchproducts } from './redux/slices/productsSlice';
import {useDispatch} from "react-redux";
const Cart=React.lazy(()=>import('./components/Cart'))
const Products=React.lazy(()=>import('./components/Products'))
const ProductDetails=React.lazy(()=>import('./components/productDetails'))
const NotFound=React.lazy(()=>import('./components/NotFound'))
function App() {
  const dispatch=useDispatch()
  return (
    <> 
     <Suspense fallback={<Loading></Loading>}>
    <NavBar></NavBar>
    <Routes>
      <Route path='/products'>
        <Route index element={<Products/>} npm loader={dispatch(fetchproducts())}></Route>
        <Route path=':id' element={<ProductDetails/>}></Route>
        <Route path='addProduct' element={<AddProduct/>}></Route>
        <Route path='basket' element={<Cart/>}></Route>
        <Route path='UpdateProduct/:id' element={<UpdateProduct/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
