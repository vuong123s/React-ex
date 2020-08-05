import React, { Component } from "react";

export const DataContext = React.createContext();

export class Data extends Component {
  state = {
    products: [
      {
        _id: 1,
        name: "Huckleberry Fin",
        author: "Jul Abraham",
        price: 40.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-2-300x426.jpg",
      },
      {
        _id: 2,
        name: "Love Does",
        author: "Bio logi Ace",
        price: 25.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-1-300x457.jpg",
      },
      {
        _id: 3,
        name: "Rebel of the Sands",
        author: "Cucu Rustaman",
        price: 65.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/rebelsand-book-300x453.jpg",
      },
      {
        _id: 4,
        name: "The Imortal Rules",
        author: "Asial Harmoni",
        price: 55.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/imortal-book-300x452.jpg",
      },
      {
        _id: 5,
        name: "Fairest",
        author: "Armado Kilano",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/fairest-book-300x452.jpg",
      },
      {
        _id: 6,
        name: "End of Watch",
        author: "Armado Kilano",
        price: 55.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-3-330x452.jpg",
      },
      {
        _id: 7,
        name: "Last Piano",
        author: "G Blakemore Evans",
        price: 35.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_009-330x452.jpg",
      },
      {
        _id: 8,
        name: "Mutan It`s True?",
        author: "Iwan Gaet",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_025-330x452.png",
      },
      {
        _id: 9,
        name: "Blood Repair",
        author: "Yuni Ayunda",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_028-330x452.png",
      },
      {
        _id: 10,
        name: "The Wonder Years",
        author: "Ama Aipama",
        price: 25.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_001_0-330x452.jpg",
      },
    ],
    data: [[]],
  };
  render() {
    const { products, data } = this.state;
    return (
      <DataContext.Provider value={{ products, data }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
