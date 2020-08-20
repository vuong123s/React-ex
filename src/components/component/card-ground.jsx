import React from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillTwitterSquare,
  AiOutlineGooglePlus,
  AiFillLinkedin,
} from "react-icons/ai";
import { DataContext } from "../data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class CardGround extends React.Component {
  static contextType = DataContext;
  render() {
    const { data } = this.context;
    return (
      <div className="card-ground-component">
        <div className="card-ground-style">
          <div className="img-content">
            <img src={data[data.length - 1].img} alt="Img" />
          </div>
          <div className="content">
            <div className="content-title">
              <h2>{data[data.length - 1].name}</h2>
              <p>{data[data.length - 1].author}</p>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret suitable he
                followed speedily. Indeed vanity excuse or mr lovers of on. By
                offer scale an stuff. Blush be sorry no sight. Sang lose of hour
                then he left find.
              </p>
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
          </div>
        </div>
      </div>
    );
  }
}
