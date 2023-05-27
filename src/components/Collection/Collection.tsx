import React from "react";
import "./collection.scss";
import Square from "../Square/Square";
import CollectionTopbar from "../CollectionTopbar/CollectionTopbar";

export default function Collection() {
  const collection = [
    {
      title: "MEN'S COLLECTION",
      image: "images/mens.png",
    },
    {
      title: "WOMEN'S COLLECTION",
      image: "images/womens.png",
    },
    {
      title: "HOME-DECORATION",
      image: "images/home-decoration.png",
    },
    {
      title: "FURNITURE",
      image: "images/furniture.png",
    },
    {
      title: "TOPS",
      image: "images/tops.png",
    },
    {
      title: "SUNGLASSES",
      image: "images/sunglasses.png",
    },
  ];
  return (
    <div className="collection-bar">
      <CollectionTopbar />
      <div className="collection-bar__grid">
        {collection.map((item, index) => (
          <Square title={item.title} image={item.image} key={index} />
        ))}
      </div>
    </div>
  );
}
