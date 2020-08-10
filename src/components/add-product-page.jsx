import React from "react";
import End from "./component/end";
import ComponentHeader from "./component/component-header";

export default function AddProductPage() {
  return (
    <div className="add-prodct-page">
      <ComponentHeader />
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th class="product-remove">&nbsp;</th>
              <th class="product-thumbnail">&nbsp;</th>
              <th class="product-name">Product</th>
              <th class="product-price">Price</th>
              <th class="product-quantity">Quantity</th>
              <th class="product-subtotal">Total</th>
            </tr>
          </thead>
        </table>
      </div>

      <End />
    </div>
  );
}
