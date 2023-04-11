
import { useState } from "react";
import { Alert, Col,Card,Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getAllProducts } from "../Services/api";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../redux/slices/cartSlice";
import { deleteProd } from "../redux/slices/productsSlice";

function Product(props) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [product,setProduct]=useState(props.product);
    const MaClasse=  product.like<5 ?  "text-center" : "bestProduct"
    const addLike=()=>{ 
     setProduct({...product,like:product.like+1})
    } 
    const handleUpdate=(id)=>{ 
      navigate(`/products/updateProduct/${id}`)
    }
    const handleDelete=async(p)=>{ 
      const result=window.confirm("are you sure you want to delete !"); 
      if (result){ 
        dispatch(deleteProd(p))
      }
    }
    const addToCart=(p)=>{ 
       dispatch(addProductToBasket(p));
       navigate('/products/basket')
    }
  

    return ( 

      
        <> 
        <Card
        style={{ width: "18rem" }}
        className={MaClasse}
        border="secondary"
      >
        <Card.Header>
          <Card.Img
            variant="top"
            src={"../assets/"+product.img}
            alt="Product Img"
            height={200}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title >
            <Link to={`/products/${product.id}`}>{product.name}</Link>        
            </Card.Title>
          <Card.Text>Quantity:{product.quantity} </Card.Text>
          <Card.Text> Price : {product.price} dt</Card.Text>
          <Card.Text>Like : {product.like} </Card.Text>
          <Row>
            <Col md={6}>
            {" "}
              <Button variant="primary" onClick={addLike} >
                Like
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="info"
                onClick={()=>props.buy(product)}
                disabled={product.quantity===0}
              >
                Buy
              </Button>
              <Button
                variant="info"
                style={{marginTop:"10px"}}
                onClick={()=>handleUpdate(product.id)}
              >
                Update 
              </Button>
              <Button
                variant="info"
                style={{marginTop:"10px"}}
                onClick={()=>handleDelete(product)}
              >
                Delete 
              </Button>
              <Button
                variant="info"
                style={{marginTop:"10px"}}
                onClick={()=>{addToCart(product)}}
              >
                Add to cart  
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>


        </> 
     );
}

export default Product;