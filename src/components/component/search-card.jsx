import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";

export default class SearchCard extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="search-all-card">
        {data.map((i) => {
          return (
            <div className="search-card">
              <div className="item-search">
                <div className="item-img">
                  <img src={i.img} alt="" />
                </div>
                <div className="item-content">
                  <h2>{i.name}</h2>
                  <p className="person-author">
                    <BsFillPersonFill size={40} className="icon-person" />
                    {i.author}
                  </p>

                  <p>
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily. Indeed vanity excuse or mr lovers of on.
                    By offer scale an stuff. Blush be sorry no sight. Sang lose
                    of hour then he left find.
                  </p>
                  <button className="add-product">Read More</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="not-item">
          <GrNotes size={100} className="item-note" />
          <p>
            Sorry, but nothing matched your search terms. Please try again with
            some different keywords.
          </p>
        </div>
      </div>
    );
  }
}
