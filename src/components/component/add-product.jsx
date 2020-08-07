import React, { Component } from "react";
import { DataContext } from "../data";

const getData = JSON.parse(localStorage.getItem("data"));
export default class AddProduct extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = DataContext;

  render() {
    let { dataAddProduct } = this.context;
    let allPrice = 0;
    dataAddProduct = getData;
    for (let a = 0; a < dataAddProduct.length; a++) {
      allPrice += dataAddProduct[a].price;
    }
    return (
      <>
        <span id="amount">{dataAddProduct.length}</span>
        <div className="see-item-products">
          <div className="items-product">
            {dataAddProduct.map((i) => {
              return (
                <div className="item">
                  <div className="item-img">
                    <img src={i.img} alt="Img" />
                  </div>
                  <div className="item-add-content">
                    <h6>{i.name}</h6>
                    <p>${i.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="all-price">All Price : ${allPrice}</div>
        </div>
      </>
    );
  }
}
