import React, { Component } from "react";

export default class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: "Huckleberry Fin",
          author: "Jul Abraham",
          price: "$40.00",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-2-300x426.jpg",
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="Card">
        <img src={products[0].img} alt="Img" />
        <h6>{products[0].name}</h6>
        <p>{products[0].author}</p>
        <p>{products[0].price}</p>
      </div>
    );
  }
}
