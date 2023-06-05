import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../../components/Carousel/Carousel";
import Giftbaner from "../../components/Giftbaner/Giftbaner";
import Newarivals from "../../components/Newarrivals/Newarivals";
import Collection from "../../components/Collection/Collection";
import SubscriptionBaner from "../../components/SubscriptionBaner/SubscriptionBaner";

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
