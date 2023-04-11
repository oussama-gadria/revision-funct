import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams,useNavigate } from "react-router-dom";
import { getAllProducts } from "../Services/api";
import { editProduct } from "../Services/api";
import { updateProd } from "../redux/slices/productsSlice";
import { useDispatch } from "react-redux";

function UpdateProduct() {
  const dispatch=useDispatch();
    const params=useParams();
    const navigate=useNavigate();
    const [updatedProduct,setUpdatedProduct]=useState({ 
       
    })
    const getUpdatedProduct=async()=>{ 
        const productt=await getAllProducts(params.id);
        setUpdatedProduct(productt.data);
    }
    useEffect(()=>{
        getUpdatedProduct();
     },[])

     const updateProduct=async()=>{ 
     dispatch(updateProd(updatedProduct));
     const res=await editProduct(params.id,updatedProduct);
      navigate("/products");
     }
     const handleChange=(e)=>{ 
        setUpdatedProduct({...updatedProduct,[e.target.name]:e.target.value})
     }
     const handleUpdateImg=(e)=>{ 
        setUpdatedProduct({...updatedProduct,[e.target.name]:e.target.files[0].name})
     }
    return ( 
    <>
      <h2>Modify Your KeyBoard Product</h2>
      <Form style={{ marginLeft: "50px" }}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" style={{ width: "50%" }} value={updatedProduct.name} onChange={(e)=>handleChange(e)} name="name" />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" style={{ width: "50%" }} value={updatedProduct.description} onChange={(e)=>handleChange(e)} name="description"/>
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" style={{ width: "50%" }} value={updatedProduct.price} onChange={(e)=>handleChange(e)} name="price" />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="number" style={{ width: "50%" }} value={updatedProduct.quantity} onChange={(e)=>handleChange(e)} name="quantity" />
        </Form.Group>
        <Form.Group controlId="formImg">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" style={{ width: "50%" }} value={""} onChange={(e)=>{handleUpdateImg(e)}} name="img"/>
        </Form.Group>
        <Button
          variant="primary" 
          onClick={()=>updateProduct()}       
        >
          update Product
        </Button>
        <Button
          variant="secondary"   
        >
          Cancel
        </Button>
      </Form>
    </> 
    );
}

export default UpdateProduct;