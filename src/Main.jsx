import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./layouts/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

export default function Main() {
  const data = [
    {
      _id: "0123",
      title: "Jacket for Men",
      price: 32.99,
      category: {
        _id: "0223",
        title: "men",
      },
      picture:
        "https://images.unsplash.com/photo-1557771884-709f5996687d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHdpbnRlciUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },
    {
      _id: "0124",
      title: "Orange gown",
      price: 15.99,
      category: {
        _id: "0222",
        title: "women",
      },
      picture:
        "https://images.unsplash.com/photo-1582041148887-67274b989ae3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzF8fHdpbnRlciUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },
    {
      _id: "0125",
      title: "Bear Skin Jacket",
      price: 24.99,
      category: {
        _id: "0222",
        title: "women",
      },
      picture:
        "https://images.unsplash.com/photo-1610918018886-598a97d83386?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHdpbnRlciUyMGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },
    {
      _id: "0126",
      title: "Over Coat",
      price: 38.99,
      category: {
        _id: "0222",
        title: "women",
      },
      picture:
        "https://images.unsplash.com/photo-1604947051230-fc2bc6f6c5c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=368&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },
    {
      _id: "0127",
      title: "White sweat shirt",
      price: 29.99,
      category: {
        _id: "0222",
        title: "women",
      },
      picture:
        "https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },

    {
      _id: "0128",
      title: "Brown Coat men",
      price: 30.99,
      category: {
        _id: "0223",
        title: "men",
      },
      picture:
        "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumque veritatis aut laboriosam similique autem, nam,doloremque",
      quantity: 1,
    },
  ];

  const [products, setProduct] = React.useState(data);
  const [carts, setCart] = React.useState([]);
  const [cartsCount, setCartsCount] = React.useState(0);
  const [wishlist, setWishlist] = React.useState([]);
  const [wishlistCount, setWishlistCount] = React.useState(0);

  const addToCart = (data) => {
    const cartList = [...carts];
    const index = cartList.findIndex((product) => product._id === data._id);
    if (cartList.length === 0) {
      cartList.push(data);
    } else {
      if (index === -1) {
        cartList.push(data);
      } else {
        cartList[index].quantity += 1;
      }
    }
    setCart(cartList);
    console.log(cartList);
    setCartsCount(cartsCount + 1);
  };

  const removeFromCartlist = (data) => {
    let cartList = [...carts];
    cartList.pop(data);
    setCart(cartList);
    setCartsCount(cartsCount - data.quantity);
  };

  const addToWishlist = (data) => {
    let wishlistProducts = wishlist;
    if (wishlistProducts.length > 0) {
      let product = wishlistProducts.find(
        (product) => product._id === data._id
      );
      product.quantity += 1;
      setWishlist([...wishlistProducts, product]);
    } else {
      data.quantity += 1;
      setWishlist([data]);
    }
    setWishlistCount(wishlistCount + 1);
  };

  const removeFromWishlist = (data) => {
    wishlist.pop(data);
    setWishlistCount(wishlistCount - 1);
  };

  return (
    <div>
      <Navigation cartsCount={cartsCount} wishlistCount={wishlistCount} />
      <Header />
      <Switch>
        <Route path="/cart">
          {console.log(carts)}
          <Cart cartList={carts} onRemoveFromCart={removeFromCartlist} />
        </Route>
        <Route path="/">
          <Shop
            products={products}
            onAddToCart={addToCart}
            onAddToWishlist={addToWishlist}
          />
        </Route>
      </Switch>
    </div>
  );
}
