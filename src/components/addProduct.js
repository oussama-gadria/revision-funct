import { Button, Form } from "react-bootstrap";
import { addProduct } from "../Services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createProd } from "../redux/slices/productsSlice";
function AddProduct() {
  const dispatch=useDispatch()
  const [newProduct, setNewProduct] = useState({
    name:'', 
    price:0, 
    img:"", 
    like:0, 
    quanity:0, 
    description:''
  });
  const navigate=useNavigate()

  //developing a add product function 
  const handleAddProduct = async () => {
    dispatch(createProd(newProduct))
    navigate("/products")
  }; 

  //add handleChange function to collect the informations of products 
  const handleChange=(e)=>{ 
    setNewProduct({...newProduct,[e.target.name]:e.target.value})
  }
  const handlepicture=(e)=>{ 
    setNewProduct({...newProduct,[e.target.name]:e.target.files[0].name})
  }

  return (
    <>
      <h2>Add Product</h2>
      <Form style={{ marginLeft: "50px" }}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" style={{ width: "50%" }} onChange={(e)=>{handleChange(e)}} name="name"  />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" style={{ width: "50%" }} onChange={(e)=>{handleChange(e)}} name="description" />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" style={{ width: "50%" }} onChange={(e)=>{handleChange(e)}} name="price" />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control type="text" style={{ width: "50%" }}  onChange={(e)=>{handleChange(e)}} name="quantity"/>
        </Form.Group>
        <Form.Group controlId="formImg">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" style={{ width: "50%" }}  onChange={(e)=>{handlepicture(e)}} name="img"/>
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => handleAddProduct()}
        >
          Add Product
        </Button>
      </Form>
    </>
  );
}

export default AddProduct;
