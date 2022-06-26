import React from "react";
import { aux } from "../../hoc/Auxillary";

export const Layout = (props) => (
  <aux>
    <div>Toolbar,sidebar,menu</div>
    <main>{props.children}</main>
  </aux>
);
