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
      {
        _id: 11,
        name: "Blue Drama",
        author: "Micshon Andrea",
        price: 110.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_016-330x452.jpg",
        categories: ["Drama", "True Story"],
      },
      {
        _id: 12,
        name: "City of Fallen Angels",
        author: "G Blakemore Evans",
        price: 20.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_008_0-330x452.jpg",
        categories: ["Best Seller", "Drama"],
      },
      {
        _id: 13,
        name: "Classic Story",
        author: "Armado Kilano",
        price: 75.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_017-330x452.jpg",
        categories: ["True Story"],
      },
      {
        _id: 14,
        name: "Cooking Class",
        author: "Ani Solahudin",
        price: 100.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_026.png",
        categories: ["Best Seller", "True Story"],
      },
      {
        _id: 15,
        name: "Glass of Glass",
        author: "Zie Zaenudin",
        price: 100.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_014-300x464.jpg",
        categories: ["Drama"],
      },
      {
        _id: 16,
        name: "Kursi Taman",
        author: "Iwan Gaet",
        price: 75.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_007.jpg",
        categories: ["Loved", "True Story"],
      },
      {
        _id: 17,
        name: "Laju ke Depan",
        author: "G Blakemore Evans",
        price: 95.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_020.jpg",
        categories: ["Drama", "True Story"],
      },
      {
        _id: 18,
        name: "Lavendar Honey",
        author: "Yuni Ayunda",
        price: 80.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_027-330x452.png",
        categories: ["Best Seller", "Women"],
      },
      {
        _id: 19,
        name: "Life Giant",
        author: "G Blakemore Evans",
        price: 95.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_015-330x452.jpg",
        categories: ["True Story"],
      },
      {
        _id: 20,
        name: "Maje Ke depan",
        author: "Sukaesih Tuti",
        price: 120.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_018.jpg",
        categories: ["Drama", "True Story"],
      },
      {
        _id: 21,
        name: "Maqu Meja",
        author: "Iwan Gaet",
        price: 78.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_010.jpg",
        categories: ["Horror", "True Story"],
      },
      {
        _id: 22,
        name: "Mrs Laela",
        author: "Yuni Ayunda",
        price: 65.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_013.jpg",
        categories: ["Drama", "True Story"],
      },
      {
        _id: 23,
        name: "Naga Asaf",
        author: "Micshon Andrea",
        price: 45.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_011.jpg",
        categories: ["Drama", "True Story"],
      },
      {
        _id: 24,
        name: "Red is Merah",
        author: "Kang Emil",
        price: 120.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_019.jpg",
        categories: ["True Story"],
      },
    ],
    data: [[]],
    dataAddProduct: [],
  };

  addCardProduct = (id) => {
    const { products, dataAddProduct } = this.state;
    const dataAdd = products.filter((i) => {
      return i._id === id;
    });
    console.log(dataAdd);
  };

  render() {
    const { products, data, dataAddProduct } = this.state;
    const { addCardProduct } = this;
    return (
      <DataContext.Provider
        value={{ products, data, dataAddProduct, addCardProduct }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
