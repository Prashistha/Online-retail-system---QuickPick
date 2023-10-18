import React, { useState } from "react";
import  getProductsFunction  from "../assets/products";
const PRODUCTS = getProductsFunction();
// import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import CartItem from "../components/CartItem";

// const navigate = useNavigate();

export const CartPage = ({ currentCart, makeCart }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const removeFromCart = (name) => {
    const existingProduct = currentCart.find(product => product.name === name);
    let updatedCart;
    if (existingProduct) {
      updatedCart = [
        ...currentCart
      ];

      updatedCart = updatedCart.filter(item => item.name !== existingProduct.name);
      makeCart(updatedCart);
    }
  }
  return (
    <div className="cart ">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="container ml-3">
      <div className="row">
        {currentCart.map((product, index) => (
          <div
          className={`col-md-${currentCart.length < 3 ? 6 : currentCart.length === 3 ? 4 : 3} mt-5 `}
          key={index}
        >
            <CartItem
              price={product.price}
              name={product.name}
              img={product.img}
              quantity={product.quantity}
              setQuantity={setQuantity}
              removeFromCart={removeFromCart}
            />
          </div>
        ))}
      </div>
      </div>

      {/* {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )} */}
    </div>
  );
};

export default CartPage;
