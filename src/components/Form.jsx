import React from "react";
// import productSchema from "../models/Product";

export default function Form({ onSubmit, onChange, onImg }) {
  // const [product, setProduct] = React.useState(productSchema);

  return (
    <div>
      <form action="/" onSubmit={onSubmit} className="form">
        <div className="form__group">
          <input
            type="text"
            // value={product.title}
            onChange={(e) => onChange(e)}
            name="title"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            // value={product.price}
            onChange={(e) => onChange(e)}
            name="price"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="text"
            // value={product.desciption}
            onChange={(e) => onChange(e)}
            name="description"
            className="form__input-group"
          />
        </div>
        <div className="form__group">
          <input
            type="file"
            // value={product.picture}
            onChange={(e) => onImg(e)}
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
