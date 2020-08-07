import React, { Component } from "react";
import ComponentHeader from "./component/component-header";
import Background from "./component/background";
import End from "./component/end";
import { DataContext } from "./data";

export class addProductCard extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getData = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((i) => {
        return i._id === Number(this.props.match.params.id);
      });
      console.log(data);

      this.setState({
        product: data,
      });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { product } = this.state;
    return (
      <>
        <div className="style-header">
          <ComponentHeader />
          <Background title="Card" />
          <table className="table-add">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {/*product.map((i) => {
              return (
                <tr>
                  <th>
                    <img src={i.img} alt="" /> {i.name}
                  </th>
                  <th>{i.price}</th>
                  <th>
                    <input type="number" min={1} placeholder={1} />
                  </th>
                  <th>{}</th>
                </tr>
              );
            })*/}
          </table>
          <End />
        </div>
      </>
    );
  }
}
