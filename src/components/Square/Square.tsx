import React from "react";
import "./square.scss";

interface ISquare {
  title: string;
  image: string;
}

export default function Square({ title, image }: ISquare) {
  return (
    <div className="square col-12 col-md-6 col-xl-4">
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
