import React from "react";
import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./layouts/Header";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Form from "./components/Form";
import firebaseInit from "./services/firebaseSetup";
import productSchema from "./models/Product";

export default function Main() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState([]);

  const [product, setProduct] = React.useState(productSchema);
  const [imgAsFile, setImgAsFile] = React.useState();
  const [imgUrl, setImgUrl] = React.useState({});
  const [carts, setCart] = React.useState([]);
  const [cartsCount, setCartsCount] = React.useState(0);

  useEffect(() => {
    const dataArray = [];
    setInterval(async () => {
      const ref = await firebaseInit.database().ref("products");
      await ref.once("value", (snap) => {
        if (snap.val()) dataArray.push(snap.val());
      });
      setProducts(dataArray[0]);
    }, 5000);
  }, []);

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

  const searchProduct = (query) => {
    setSearchQuery(query);
  };

  const getProducts = () => {
    const productList = [...products];
    if (searchQuery) {
      return productList.filter((product) => {
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      return productList;
    }
  };

  const handleImg = (event) => {
    setImgAsFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    const productDetails = { ...product };
    event.persist();
    const date = new Date();
    const _id =
      Math.random().toString(36).substring(7) + date.getTime().toString();
    Object.assign(productDetails, {
      _id: `_${_id}`,
      quantity: 0,
      [event.target.name]: event.target.value,
    });
    setProduct({ ...productDetails });
  };

  const handleSubmit = (event) => {
    firebaseInit
      .storage()
      .ref()
      .child(`image/${product._id + imgAsFile.name}`)
      .put(imgAsFile)
      .then((snap) => {
        firebaseInit
          .storage()
          .ref()
          .child(`image/${product._id + imgAsFile.name}`)
          .getDownloadURL()
          .then((url) => {
            Object.assign(product, { picture: url });
            console.log(product);
            firebaseInit
              .database()
              .ref("products")
              .child(products.length)
              .set(product)
              .then((snap) => {
                console.log("Successfull");
              });
          });
      });
    event.preventDefault();
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
          <Form
            onSubmit={handleSubmit}
            onChange={handleChange}
            onImg={handleImg}
          />
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
