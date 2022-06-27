import React, { Component } from "react";
import { aux } from "../../hoc/Auxillary";
import Burger from "../../components/Burger/BurgerIngredient/Burger";
export default class Burgerbuilder extends Component {
  render() {
    return (
      <aux>
        <Burger />
      </aux>
    );
  }
}
