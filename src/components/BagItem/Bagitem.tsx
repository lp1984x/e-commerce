import React from "react";
import { Button, ButtonGroup, CloseButton } from "react-bootstrap";
import { IProd } from "../../models";
import { useAppDispatch } from "../../store/store";
import {
  decrementQuantity,
  delFromBag,
  incrementQuantity,
} from "../../store/features/bagSlice";
import "./bagitem.scss";

interface IBagProps {
  prd: IProd;
}

export default function Bagitem({ prd }: IBagProps) {
  const dispatch = useAppDispatch();
  return (
    <tr className="bagitem">
      <td className="bagitem__prod">
        <CloseButton
          className="bagitem__close-button"
          onClick={() => dispatch(delFromBag(prd))}
        />
        <img src={prd.images[0]} className="bagitem__image " alt="card" />
        <p className="bagitem__title">{prd.title}</p>
      </td>
      <td>{prd.price}$</td>
      <td>
        <ButtonGroup aria-label="Basic example" size="sm">
          <Button
            variant="outline-light"
            className="text-secondary"
            onClick={() => dispatch(decrementQuantity(prd))}
          >
            -
          </Button>
          <div className="bagitem__quantity">{prd.bagQuantity}</div>

          <Button
            variant="outline-light"
            className="text-secondary"
            onClick={() => dispatch(incrementQuantity(prd))}
          >
            +
          </Button>
        </ButtonGroup>
      </td>
      <td>{prd.tempPrice}$</td>
    </tr>
  );
}
