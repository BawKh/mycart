import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/esm/Table";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/esm/Image";
import { Clear, deleteFromCart } from "../rtk/slices/cart-slice";
function Cart() {
  const MyCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = MyCart.reduce((acc, el) => {
    acc += +el.price * el.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <h1 className="py-5">Welcome To Cart.</h1>
      <h5> Total Price : {totalPrice.toFixed(2)} $</h5>
      <Button
        className="mb-3"
        variant="danger"
        onClick={() => dispatch(Clear())}
      >
        Clear The Cart
      </Button>
      <Table striped bordered hover className="py-3">
        <thead>
          <tr>
            <th>ID</th>
            <th> Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {MyCart &&
            MyCart.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.price}$</td>
                  <td style={{ width: "50px" }}>
                    {<Image src={el.image} alt={el.title} className="w-100" />}
                  </td>
                  <td>{el.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(deleteFromCart(el))}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}
export default Cart;
