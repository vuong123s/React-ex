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
        categories: ["Best Seller", "True Story"],
      },
      {
        _id: 2,
        name: "Love Does",
        author: "Bio logi Ace",
        price: 25.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-1-300x457.jpg",
        categories: ["Best Seller", "Loved"],
      },
      {
        _id: 3,
        name: "Rebel of the Sands",
        author: "Cucu Rustaman",
        price: 65.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/rebelsand-book-300x453.jpg",
        categories: ["Actions"],
      },
      {
        _id: 4,
        name: "The Imortal Rules",
        author: "Asial Harmoni",
        price: 55.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/imortal-book-300x452.jpg",
        categories: ["Horror"],
      },
      {
        _id: 5,
        name: "Fairest",
        author: "Armado Kilano",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/fairest-book-300x452.jpg",
        categories: ["Best Seller"],
      },
      {
        _id: 6,
        name: "End of Watch",
        author: "Armado Kilano",
        price: 55.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-3-330x452.jpg",
        categories: ["Horror"],
      },
      {
        _id: 7,
        name: "Last Piano",
        author: "G Blakemore Evans",
        price: 35.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_009-330x452.jpg",
        categories: ["Drama", " rue Story"],
      },
      {
        _id: 8,
        name: "Mutan It`s True?",
        author: "Iwan Gaet",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_025-330x452.png",
        categories: ["Drama", "Horror"],
      },
      {
        _id: 9,
        name: "Blood Repair",
        author: "Yuni Ayunda",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_028-330x452.png",
        categories: ["Best Seller", "True Story", "Women"],
      },
      {
        _id: 10,
        name: "The Wonder Years",
        author: "Ama Aipama",
        price: 25.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_001_0-330x452.jpg",
        categories: ["Best Seller", "True Story"],
      },
    ],
    data: [[]],
    dataAddProduct: [],
  };
  render() {
    const { products, data, dataAddProduct } = this.state;
    return (
      <DataContext.Provider value={{ products, data, dataAddProduct }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
