import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../Carousel/Carousel";
import Giftbaner from "../Giftbaner/Giftbaner";
import Newarivals from "../Newarrivals/Newarivals";
import Collection from "../Collection/Collection";
import SubscriptionBaner from "../SubscriptionBaner/SubscriptionBaner";

export default function Main() {
  return (
    <Container>
      <Carousel />
      <Newarivals />
      <Giftbaner />
      <Collection />
      <SubscriptionBaner />
    </Container>
  );
}
