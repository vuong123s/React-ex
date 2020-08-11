import React from "react";
import End from "./component/end";
import ComponentHeader from "./component/component-header";
import Background from "./component/background";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DataContext } from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class AddProductPage extends React.Component {
  static contextType = DataContext;
  render() {
    const { dataAddProduct, addCardProduct } = this.context;
    let allPrice = 0;
    for (let a = 0; a < dataAddProduct.length; a++) {
      allPrice += dataAddProduct[a].price;
    }
    return (
      <div className="add-prodct-page">
        <ComponentHeader />
        <Background title="Cart" />
        <div className="page">
          <div className="page-form">
            <div className="table-card">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    <th class="product-remove">&nbsp;</th>
                    <th class="product-thumbnail">&nbsp;</th>
                    <th class="product-name">Product</th>
                    <th class="product-price">Price</th>
                    <th class="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {dataAddProduct.map((i) => {
                    return (
                      <tr>
                        <td className="product-remove table-delete">
                          <RiDeleteBin5Line size={25} />
                        </td>
                        <td className="product-thumbnail table-img">
                          <Link to={`/card/${i._id}`}>
                            <img src={i.img} alt="" />
                          </Link>
                        </td>
                        <td className="product-name table-name">{i.name}</td>
                        <td className="product-price table-price">
                          £{i.price}.00
                        </td>
                        <td className="product-subtotal table-total">
                          £{i.price}.00
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="subtotal">
            <div className="card-total">
              <h2>Cart Totals</h2>
              <table className="table-total">
                <tr class="table-total-head">
                  <th>Subtotal</th>
                  <th>£{allPrice}.00</th>
                </tr>
                <tr>
                  <td>Totals</td>
                  <td>£{allPrice}.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <button className="add-product check-out-total">Check Out</button>
        <End />
      </div>
    );
  }
}
