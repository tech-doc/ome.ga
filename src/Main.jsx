import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./layouts/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import data from "./data/Products";
import Form from "./components/Form";

export default function Main() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState(data);
  const [carts, setCart] = React.useState([]);
  const [cartsCount, setCartsCount] = React.useState(0);

  const addToCart = (data) => {
    const cartList = [...carts];
    const index = cartList.findIndex((product) => product._id === data._id);
    if (cartList.length === 0) {
      data.quantity += 1;
      cartList.push(data);
    } else {
      if (index === -1) {
        data.quantity += 1;
        cartList.push(data);
      } else {
        cartList[index].quantity += 1;
      }
    }
    setCart(cartList);
    setCartsCount(cartsCount + 1);
  };

  const removeFromCartlist = (data) => {
    let cartList = [...carts];
    let newCartList = cartList.filter((product) => product._id !== data._id);
    setCart(newCartList);
    setCartsCount(cartsCount - data.quantity);
  };

  const increaseQuantity = (data) => {
    const cartList = [...carts];
    const index = cartList.findIndex((product) => product._id === data._id);
    cartList[index].quantity += 1;
    setCart(cartList);
    setCartsCount(cartsCount + 1);
  };

  const decreaseQuantity = (data) => {
    const cartList = [...carts];
    const index = cartList.findIndex((product) => product._id === data._id);
    cartList[index].quantity -= 1;
    let newCartList = cartList.filter((product) => product.quantity !== 0);
    setCart(newCartList);
    setCartsCount(cartsCount - 1);
  };

  const searchProduct = (search) => {
    setSearchQuery(search);
  };

  const getProducts = () => {
    const productList = [...products];
    let newProducts;
    if (searchQuery) {
      return productList.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      return productList;
    }
  };

  return (
    <div>
      <Navigation carts={carts} cartsCount={cartsCount} />
      <Header />
      <Switch>
        <Route path="/cart">
          <Cart
            cartList={carts}
            onSearch={searchProduct}
            onQuantityPlus={increaseQuantity}
            onQuantityMinus={decreaseQuantity}
            onRemoveFromCart={removeFromCartlist}
          />
        </Route>
        <Route path="/add-product">
          <Form />
        </Route>
        <Route path="/">
          <Shop
            onSearch={searchProduct}
            products={getProducts()}
            onAddToCart={addToCart}
          />
        </Route>
      </Switch>
    </div>
  );
}
