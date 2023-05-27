import React from "react";
import "./prodcard.scss";
import { useAppSelector } from "../../store/store";

interface ICard {
  image: string;
  title: string;
  price: number;
  brand: string;
  category: string;
}

export default function Prodcard({
  image,
  title,
  price,
  brand,
  category,
}: ICard) {
  const currency = useAppSelector((state) => state.currency.value);
  return (
    <div className="prodcard">
      <div
        className="prodcard__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h4>{title}</h4>
      <p className="prodcard__brand">by: {brand}</p>
      <p className="prodcard__category">{category}</p>
      <h3>
        <span className="prodcard__span">price:</span>{" "}
        {currency === "USD" && "$ " + price}
        {currency === "RUB" && `\u20bd ` + price * 80}
        {currency === "CHN" && `\u5143 ` + price * 7}
      </h3>
      <button className="prodcard__button">ADD TO BAG</button>
    </div>
  );
}
