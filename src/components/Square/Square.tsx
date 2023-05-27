import React from "react";
import "./square.scss";

interface ISquare {
  title: string;
  image: string;
}

export default function Square({ title, image }: ISquare) {
  return (
    <div className="square">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="square__image"
      >
        <h1 className="square__title">{title}</h1>
      </div>
    </div>
  );
}
