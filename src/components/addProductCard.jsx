import React, { Component } from "react";
import ComponentHeader from "./component/component-header";
import End from "./component/end";
import { DataContext } from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComponentMenu from "./component/component-menu";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillTwitterSquare,
  AiOutlineGooglePlus,
  AiFillLinkedin,
} from "react-icons/ai";
import CardAnimation from "./component/card-animation";
import Review from "./component/review";
import PageLogIn from "./component/pageLogIn";
export class addProductCard extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    product: [],
    flex: "none",
    flex1: "flex",
    flex2: "none",
    color: "#232323",
    color1: "#eb8367",
    color2: "#232323",
    value: "1",
  };

  getData = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((i) => {
        return i._id === Number(this.props.match.params.id);
      });
      this.setState({
        product: data,
      });
    }
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    this.getData();
    const { addComment } = this.context;
    const getComment = JSON.parse(localStorage.getItem("dataComment"));
    addComment(getComment);
  }

  componentDidUpdate() {
    const { product } = this.state;
    const { getCount } = this.context;
    getCount(this.state.value, product[0]._id);
  }

  changeFlex() {
    if (this.state.flex === "none") {
      this.setState({
        flex2: "none",
        flex1: "none",
        flex: "flex",
        color: "#eb8367",
        color1: "#232323",
        color2: "#232323",
      });
    }
  }

  changeFlex1() {
    if (this.state.flex1 === "none") {
      this.setState({
        flex: "none",
        flex2: "none",
        flex1: "flex",
        color: "#232323",
        color1: "#eb8367",
        color2: "#232323",
      });
    }
  }

  changeFlex2() {
    if (this.state.flex2 === "none") {
      this.setState({
        flex: "none",
        flex1: "none",
        flex2: "flex",
        color: "#232323",
        color1: "#232323",
        color2: "#eb8367",
      });
    }
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
        <PageLogIn />
        <div className="style-header-add-card">
          <ComponentHeader />
          <ComponentMenu />
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
                          <form>
                            <label>
                              <input
                                className="input-number"
                                type="number"
                                value={this.state.value}
                                onChange={this.handleChange}
                              />
                            </label>
                            <button
                              onClick={() => addCardProduct(i._id)}
                              className="add-product"
                            >
                              Add to card
                            </button>
                          </form>
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
                <div className="container">
                  <ul className="container-ul">
                    <li
                      onClick={() => this.changeFlex1()}
                      style={{ color: this.state.color1 }}
                    >
                      Description
                    </li>
                    <li
                      onClick={() => this.changeFlex2()}
                      style={{ color: this.state.color2 }}
                    >
                      Meet The Author
                    </li>
                    <li
                      onClick={() => this.changeFlex()}
                      style={{ color: this.state.color }}
                    >
                      Review (0)
                    </li>
                  </ul>
                </div>

                <div
                  className="description"
                  style={{ display: this.state.flex1 }}
                >
                  <div className="description-text">
                    <p>
                      Attention he extremity unwilling on otherwise. Conviction
                      up partiality as delightful is discovered. Yet jennings
                      resolved disposed exertion you off. Left did fond drew fat
                      head poor. So if he into shot half many long. China fully
                      him every fat was world grave.
                      <br />
                      Greatest properly off ham exercise all. Unsatiable
                      invitation its possession nor off. All difficulty
                      estimating unreserved increasing the solicitude. Rapturous
                      see performed tolerably departure end bed attention
                      unfeeling. On unpleasing principles alteration of. Be at
                      performed preferred determine collected. Him nay acuteness
                      discourse listening estimable our law. Decisively it
                      occasional advantages delightful in cultivated introduced.
                      Like law mean form are sang loud lady put. <br />
                      Dissuade ecstatic and properly saw entirely sir why
                      laughter endeavor. In on my jointure horrible margaret
                      suitable he followed speedily. Indeed vanity excuse or mr
                      lovers of on. By offer scale an stuff. Blush be sorry no
                      sight. Sang lose of hour then he left find. <br />
                      Was drawing natural fat respect husband. An as noisy an
                      offer drawn blush place. These tried for way joy wrote
                      witty. In mr began music weeks after at begin. Education
                      no dejection so direction pretended household do to.
                      Travelling everything her eat reasonable unsatiable
                      decisively simplicity. Morning request be lasting it
                      fortune demands highest of.
                      <br />
                    </p>
                  </div>
                </div>
                <div
                  className="meet-author"
                  style={{ display: this.state.flex2 }}
                >
                  <div className="author-img">
                    <div className="author-content">
                      <img src={i.imgAthor} alt="" />
                      <h2>{i.name}</h2>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="review-component"
                  style={{ display: this.state.flex }}
                >
                  <Review i={i} id={this.props.match.params.id} />
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
