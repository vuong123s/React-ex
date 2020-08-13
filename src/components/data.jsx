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
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-2-300x426.jpg",
        categories: ["Best Seller", "True Story"],
        count: 1,
      },
      {
        _id: 2,
        name: "Love Does",
        author: "Bio logi Ace",
        price: 25.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-1-300x457.jpg",
        categories: ["Best Seller", "Loved"],
        count: 1,
      },
      {
        _id: 3,
        name: "Rebel of the Sands",
        author: "Cucu Rustaman",
        price: 65.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/rebelsand-book-300x453.jpg",
        categories: ["Actions"],
        count: 1,
      },
      {
        _id: 4,
        name: "The Imortal Rules",
        author: "Asial Harmoni",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        price: 55.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/imortal-book-300x452.jpg",
        categories: ["Horror"],
        count: 1,
      },
      {
        _id: 5,
        name: "Fairest",
        author: "Armado Kilano",
        price: 43.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/fairest-book-300x452.jpg",
        categories: ["Best Seller"],
        count: 1,
      },
      {
        _id: 6,
        name: "End of Watch",
        author: "Armado Kilano",
        price: 55.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2017/06/book-3-330x452.jpg",
        categories: ["Horror"],
        count: 1,
      },
      {
        _id: 7,
        name: "Last Piano",
        author: "G Blakemore Evans",
        price: 35.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_009-330x452.jpg",
        categories: ["Drama", " rue Story"],
        count: 1,
      },
      {
        _id: 8,
        name: "Mutan It`s True?",
        author: "Iwan Gaet",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_025-330x452.png",
        categories: ["Drama", "Horror"],
        count: 1,
      },
      {
        _id: 9,
        name: "Blood Repair",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Yuni Ayunda",
        price: 43.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_028-330x452.png",
        categories: ["Best Seller", "True Story", "Women"],
        count: 1,
      },
      {
        _id: 10,
        name: "The Wonder Years",
        author: "Ama Aipama",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        price: 25.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_001_0-330x452.jpg",
        categories: ["Best Seller", "True Story"],
        count: 1,
      },
      {
        _id: 11,
        name: "Blue Drama",
        author: "Micshon Andrea",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        price: 110.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_016-330x452.jpg",
        categories: ["Drama", "True Story"],
        count: 1,
      },
      {
        _id: 12,
        name: "City of Fallen Angels",
        author: "G Blakemore Evans",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        price: 20.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_008_0-330x452.jpg",
        categories: ["Best Seller", "Drama"],
        count: 1,
      },
      {
        _id: 13,
        name: "Classic Story",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Armado Kilano",
        price: 75.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_017-330x452.jpg",
        categories: ["True Story"],
        count: 1,
      },
      {
        _id: 14,
        name: "Cooking Class",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Ani Solahudin",
        price: 100.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_026.png",
        categories: ["Best Seller", "True Story"],
        count: 1,
      },
      {
        _id: 15,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        name: "Glass of Glass",
        author: "Zie Zaenudin",
        price: 100.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_014-300x464.jpg",
        categories: ["Drama"],
        count: 1,
      },
      {
        _id: 16,
        name: "Kursi Taman",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Iwan Gaet",
        price: 75.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_007.jpg",
        categories: ["Loved", "True Story"],
        count: 1,
      },
      {
        _id: 17,
        name: "Laju ke Depan",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "G Blakemore Evans",
        price: 95.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_020.jpg",
        categories: ["Drama", "True Story"],
        count: 1,
      },
      {
        _id: 18,
        name: "Lavendar Honey",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Yuni Ayunda",
        price: 80.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/book_027-330x452.png",
        categories: ["Best Seller", "Women"],
        count: 1,
      },
      {
        _id: 19,
        name: "Life Giant",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "G Blakemore Evans",
        price: 95.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_015-330x452.jpg",
        categories: ["True Story"],
        count: 1,
      },
      {
        _id: 20,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        name: "Maje Ke depan",
        author: "Sukaesih Tuti",
        price: 120.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_018.jpg",
        categories: ["Drama", "True Story"],
        count: 1,
      },
      {
        _id: 21,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        name: "Maqu Meja",
        author: "Iwan Gaet",
        price: 78.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_010.jpg",
        categories: ["Horror", "True Story"],
        count: 1,
      },
      {
        _id: 22,
        name: "Mrs Laela",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Yuni Ayunda",
        price: 65.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_013.jpg",
        categories: ["Drama", "True Story"],
        count: 1,
      },
      {
        _id: 23,
        name: "Naga Asaf",
        author: "Micshon Andrea",
        price: 45.0,
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_011.jpg",
        categories: ["Drama", "True Story"],
        count: 1,
      },
      {
        _id: 24,
        name: "Red is Merah",
        imgAthor:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/author_7-150x150.jpg",
        author: "Kang Emil",
        price: 120.0,
        img:
          "https://demo2.tokomoo.com/livre/wp-content/uploads/sites/16/2016/10/Book_019.jpg",
        categories: ["True Story"],
        count: 1,
      },
    ],
    data: [[]],
    dataAddProduct: [],
  };

  addCardProduct = (id) => {
    const { products, dataAddProduct } = this.state;
    const check = dataAddProduct.filter((i) => {
      return i._id === id;
    });
    if (check.length > 0) {
      check[0].count += 1;
    }
    const checkFalse = dataAddProduct.every((i) => {
      return i._id !== id;
    });
    if (checkFalse) {
      const dataAdd = products.filter((i) => {
        return i._id === id;
      });
      this.setState({
        dataAddProduct: [...dataAddProduct, ...dataAdd],
      });
    }
  };

  returnCardProduct = (id) => {
    const { dataAddProduct } = this.state;
    const checkFalse = dataAddProduct.every((i) => {
      return i._id !== id;
    });
    if (!checkFalse) {
      alert("the card has been on product");
    }
  };

  plus = (id) => {
    const { dataAddProduct } = this.state;
    dataAddProduct.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ dataAddProduct: dataAddProduct });
  };

  minus = (id) => {
    const { dataAddProduct } = this.state;
    dataAddProduct.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ dataAddProduct: dataAddProduct });
  };

  getCount = (num, id) => {
    const { products } = this.state;
    const getCart = products.filter((i) => {
      return i._id === id;
    });
    getCart[0].count = Number(num);
  };

  componentDidUpdate() {
    localStorage.setItem(
      "dataItemCard",
      JSON.stringify(this.state.dataAddProduct)
    );
  }

  componentDidMount() {
    const dataItemCard = JSON.parse(localStorage.getItem("dataItemCard"));
    if (dataItemCard !== null) this.setState({ dataAddProduct: dataItemCard });
  }

  getDataItemCart = (item) => {
    const { data } = this.state;
    data.push(item);
    console.log(data);
  };

  render() {
    const { products, data, dataAddProduct, textValue } = this.state;
    const {
      addCardProduct,
      deleteCardProduct,
      plus,
      minus,
      getCount,
      getDataItemCart,
    } = this;

    return (
      <DataContext.Provider
        value={{
          products,
          data,
          dataAddProduct,
          addCardProduct,
          deleteCardProduct,
          textValue,
          plus,
          minus,
          getCount,
          getDataItemCart,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
