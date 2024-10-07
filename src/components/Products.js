import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../rtk/slices/products-slices";
import { addToCart } from "../rtk/slices/cart-slice";
function Products() {
  const data = useSelector((state) => state.products);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container className="py-5">
      <Row className="py-5">
        {data.map((el) => {
          return (
            <Col key={el.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "300px" }}
                  variant="top"
                  src={el.image}
                />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.description}</Card.Text>
                  <Card.Text>{el.price}$</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      dispatch(addToCart(el));
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Products;
