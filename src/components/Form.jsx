import React from "react";
import firebaseInit from "../services/firebaseSetup";
import productSchema from "../models/Product";

export default function Form({ onSubmit }) {
  const [product, setProduct] = React.useState(productSchema);

  const handleChange = (event) => {
    const productDetails = { ...product };
    event.persist();
    const date = new Date();
    const _id =
      Math.random().toString(36).substring(7) + date.getTime().toString();
    Object.assign(productDetails, {
      _id: `_${_id}`,
      [event.target.name]: event.target.value,
    });

    setProduct({ ...productDetails });
  };

  const handleSubmit = (event) => {
    let ref = firebaseInit.database().ref("products").child("product");
    ref.set(product);
    console.log("Successfull");
    event.preventDefault();
  };

  // const getProducts = (event) => {
  //   let data;
  //   let ref = firebaseInit.database().ref("products").child("product");
  //   ref.once("value", (snapshot) => {
  //     data = snapshot.val();
  //   });
  //   return data;
  // };

  return (
    <div>
      {/* {console.log(`data : ${getProducts()}`)} */}
      <form onSubmit={handleSubmit} className="form">
        <div className="form__group">
          <input
            type="text"
            value={product.title}
            onChange={handleChange}
            name="title"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            value={product.price}
            onChange={handleChange}
            name="price"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            value={product.desciption}
            onChange={handleChange}
            name="description"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="file"
            value={product.picture}
            onChange={handleChange}
            name="picture"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <button className="form__submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
