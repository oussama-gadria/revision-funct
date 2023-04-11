import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/api";

function ProductDetails() {
    const [product,setProduct]=useState({})
    const {id}=useParams(); 
    console.log(id);
    const getProduct=async()=>{ 
        const response=await getAllProducts(id)
        setProduct(response.data)
    }
   useEffect(()=>{ 
    getProduct()
   },[])

    return (        
        <> 
         <Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={"../assets/" + product.img}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
        </>
     );
}

export default ProductDetails;