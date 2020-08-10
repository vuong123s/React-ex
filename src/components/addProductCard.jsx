import React, { Component } from "react";
import ComponentHeader from "./component/component-header";
import Background from "./component/background";
import End from "./component/end";
import { DataContext } from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillTwitterSquare,
  AiOutlineGooglePlus,
  AiFillLinkedin,
} from "react-icons/ai";
import CardAnimation from "./component/card-animation";
import Review from "./component/review";
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
    let categori = ``;
    for (let x of product) {
      for (let y of x.categories) {
        categori += `${y + ", "}`;
      }
    }
    const { addCardProduct } = this.context;
    return (
      <>
        <div className="style-header-add-card">
          <ComponentHeader />
          {product.map((i) => {
            return (
              <>
                <div className="card-page">
                  <div className="card-page-component">
                    <div className="content-add-card">
                      <div className="content-title-add-card">
                        <h2>{i.name}</h2>
                        <p>{i.author}</p>
                      </div>
                      <div className="content-price-add-card">
                        <h2>£{i.price}.00</h2>
                      </div>
                    </div>
                    <div className="content-img-text">
                      <div className="content-img">
                        <CardAnimation img={i.img} />
                      </div>
                      <div className="content-text-button">
                        <p>
                          Dissuade ecstatic and properly saw entirely sir why
                          laughter endeavor. In on my jointure horrible margaret
                          suitable he followed speedily. Indeed vanity excuse or
                          mr lovers of on. By offer scale an stuff. Blush be
                          sorry no sight. Sang lose of hour then he left find.
                        </p>
                        <div className="button-page-card">
                          <input
                            className="input-number"
                            type="number"
                            step="1"
                            min="1"
                            placeholder="0"
                          />
                          <button
                            onClick={() => addCardProduct(i._id)}
                            className="add-product"
                          >
                            Add to card
                          </button>
                        </div>
                        <div className="button-icon">
                          <Link to="/">
                            <Button variant="outline-primary">
                              <FaFacebookF />
                              Facebook
                            </Button>
                          </Link>
                          <Link to="/">
                            <Button variant="outline-success">
                              <AiFillTwitterSquare />
                              Twitter
                            </Button>
                          </Link>
                          <Link to="/">
                            <Button variant="outline-danger">
                              <AiOutlineGooglePlus />
                              Google+
                            </Button>
                          </Link>
                          <Link to="/">
                            <Button variant="outline-info">
                              <AiFillLinkedin />
                              LinkedIn
                            </Button>
                          </Link>
                        </div>
                        <div className="Categories-add-card">
                          Categories: {categori}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review-component">
                  <Review i={i} />
                </div>
              </>
            );
          })}

          <End />
        </div>
      </>
    );
  }
}

export default addProductCard;
