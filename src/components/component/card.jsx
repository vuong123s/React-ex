import React, { Component } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsEye } from "react-icons/bs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardGround from "./card-ground";
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
        {
          id: 2,
          name: "Love Does",
          author: "Bio logi Ace",
          price: "$25.00",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-1-300x457.jpg",
        },
        {
          id: 3,
          name: "Rebel of the Sands",
          author: "Cucu Rustaman",
          price: "$65.00",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/rebelsand-book-300x453.jpg",
        },
        {
          id: 4,
          name: "The Imortal Rules",
          author: "Asial Harmoni",
          price: "$55.00",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/imortal-book-300x452.jpg",
        },
        {
          id: 5,
          name: "Fairest",
          author: "Anita Hasibuan",
          price: "$43.00",
          img:
            "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/fairest-book-300x452.jpg",
        },
      ],
    };
    this.getData = this.getData.bind();
  }

  getData(id) {
    console.log(id);
  }

  render() {
    const { products } = this.state;
    return (
      <div className="all-cards">
        {products.map((item) => {
          return (
            <div>
              <div className="card-style">
                <div className="Card">
                  <div className="hover-card">
                    <img src={item.img} alt="Img" />
                    <Link to="/">
                      <label id="get-data-card" className="hover-img">
                        <BsEye
                          onClick={this.getData(item.id)}
                          className="see-icon"
                        />
                      </label>
                    </Link>
                  </div>
                  <Link to="/">
                    <h6>{item.name}</h6>
                  </Link>
                  <Link to="/">
                    <p>{item.author}</p>
                  </Link>
                  <div className="price-book">
                    <span>{item.price}</span>
                    <span>
                      <RiShoppingBagLine className="Icon-buy" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
