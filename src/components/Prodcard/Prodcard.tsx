import React from "react";
import "./prodcard.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addToBag } from "../../store/features/bagSlice";
import { IProd } from "../../models";

interface ICard {
  product: IProd;
}

export default function Prodcard({ product }: ICard) {
  const currency = useAppSelector((state) => state.currency.value);
  const dispatch = useAppDispatch();
  return (
    <div className="prodcard">
      <div
        className="prodcard__image"
        style={{ backgroundImage: `url(${product.images[0]})` }}
      ></div>
      <h4>{product.title}</h4>
      <p className="prodcard__brand">by: {product.brand}</p>
      <p className="prodcard__category">{product.category}</p>
      <h3>
        <span className="prodcard__span">price:</span>{" "}
        {currency === "USD" && "$ " + product.price}
        {currency === "RUB" && `\u20bd ` + product.price * 80}
        {currency === "CHN" && `\u5143 ` + product.price * 7}
      </h3>
      <button
        className="prodcard__button"
        onClick={() => dispatch(addToBag(product))}
      >
        ADD TO BAG
      </button>
    </div>
  );
}
