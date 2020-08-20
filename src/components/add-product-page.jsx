import React from "react";
import End from "./component/end";
import ComponentHeader from "./component/component-header";
import Background from "./component/background";
import { RiDeleteBin5Line } from "react-icons/ri";
import ComponentMenu from "./component/component-menu";
import { DataContext } from "./data";
import PageLogIn from "./component/pageLogIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class AddProductPage extends React.Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
  }

  render() {
    const { dataAddProduct, deleteCardProduct, plus, minus } = this.context;

    let allPrice = 0;
    for (let a = 0; a < dataAddProduct.length; a++) {
      let b = dataAddProduct[a].price * dataAddProduct[a].count;
      allPrice += b;
    }

    return (
      <>
        <PageLogIn />
        <div className="add-prodct-page">
          <ComponentHeader />
          <ComponentMenu />
          <Background title="Cart" />
          <div className="cart-buy-component">
            {dataAddProduct.map((i) => {
              return (
                <div className="cart">
                  <div className="cart-buy">
                    <div className="style-cart-buy">
                      <div className="cart-buy-icon">
                        <div className="cart-buy-img">
                          <img src={i.img} alt="" width={100} height={150} />
                        </div>
                        <RiDeleteBin5Line size={25} />
                      </div>
                      <div className="cart-buy-name">
                        <p className="width-title">Product</p>
                        <p>{i.name}</p>
                      </div>
                      <div className="cart-buy-price">
                        <p className="width-title">Price</p>
                        <p>£{i.price}.00</p>
                      </div>
                    </div>
                    <div className="cart-buy-quantity">
                      <p className="width-title">Quantity</p>
                      <td class="product-quantity">
                        <button className="count" onClick={() => minus(i._id)}>
                          -
                        </button>
                        <span className="numberCart">{i.count}</span>
                        <button className="count" onClick={() => plus(i._id)}>
                          +
                        </button>
                      </td>
                    </div>
                    <div className="cart-buy-total">
                      <p className="width-title">Total</p>
                      <p>£{i.count * i.price}.00</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

                      <th class="product-quantity">Quantity</th>
                      <th class="product-subtotal">Total</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {dataAddProduct.map((i) => {
                      return (
                        <tr>
                          <td className="product-remove table-delete">
                            <RiDeleteBin5Line
                              size={25}
                              onClick={() => deleteCardProduct(i._id)}
                            />
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
                          <td class="product-quantity">
                            <button
                              className="count"
                              onClick={() => minus(i._id)}
                            >
                              -
                            </button>
                            <span className="numberCart">{i.count}</span>
                            <button
                              className="count"
                              onClick={() => plus(i._id)}
                            >
                              +
                            </button>
                          </td>
                          <td className="product-subtotal table-total">
                            £{i.count * i.price}.00
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
            <button className="add-product check-out-total">Check Out</button>
          </div>
          <End />
        </div>
      </>
    );
  }
}
