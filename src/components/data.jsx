import React, { Component } from "react";
import DataLogin from "../db.json";

export const DataContext = React.createContext();

export class Data extends Component {
  constructor(props) {
    super(props);
    this.Reload = this.Reload.bind(this);
  }

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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        categories: ["Drama", "True Story"],
        count: 1,
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
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
        review: [],
      },
    ],
    data: [[]],
    dataAddProduct: [],
    isDisplay: "none",
    items: [],
    filter: [],
    isDisplayComponent: "none",
    commentItem: [],
    userLogin: DataLogin,
    isLogin: "none",
    isNotLogIn: "block",
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

  deleteCardProduct = (id) => {
    const { dataAddProduct } = this.state;
    const dataFilter = dataAddProduct.filter((i) => {
      return i._id !== id;
    });
    this.setState({ dataAddProduct: dataFilter });
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
    this.setState({ data: data });

    if (this.state.isDisplay === "none") {
      this.setState({
        isDisplay: "block",
      });
    }
    console.log(item);
  };

  outItem = () => {
    if (this.state.isDisplay === "block") {
      this.setState({
        isDisplay: "none",
      });
    }
  };

  SearchItem = (value) => {
    const { items } = this.state;
    const a = items.filter((i) => {
      const b = i.name.toLowerCase();
      return b.indexOf(value) !== -1;
    });
    this.setState({ filter: a });
  };

  filterItem = (value) => {
    let { items } = this.state;
    let a = [];
    const b = items.filter((i) => {
      const c = i.categories.filter((x) => {
        return x === value;
      });
      if (c.length > 0) {
        a.push(i);
      }
    });
    this.setState({ filter: a });
  };

  HighttoLow = () => {
    const { items } = this.state;
    const a = items.sort((x, y) => {
      return y.price - x.price;
    });
    this.setState({ filter: a });
  };

  LowtoHight = () => {
    const { items } = this.state;
    const a = items.sort((x, y) => {
      return x.price - y.price;
    });
    this.setState({ filter: a });
  };

  ChangeState = () => {
    this.setState({ items: this.state.products });
    this.setState({ filter: this.state.products });
  };

  ChangeState1 = (dataList) => {
    this.setState({ items: dataList });
    this.setState({ filter: dataList });
  };

  Pagination = (page = 1) => {
    const { products } = this.state;
    let perPage = 6;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    const a = products.slice(start, end);
    this.setState({ items: a, filter: a });
  };

  onClickBlock = () => {
    if (this.state.isDisplayComponent === "none") {
      this.setState({ isDisplayComponent: "block" });
    }
  };

  onClickNone = () => {
    if (this.state.isDisplayComponent === "block") {
      this.setState({ isDisplayComponent: "none" });
    }
  };

  Reload = () => {
    setTimeout(() => window.location.reload(1), 100);
  };

  ReloadAll = () => {
    window.location.reload();
  };

  addComment = (getComment) => {
    let { products } = this.state;

    for (let y of products) {
      y.review = [];
      for (let x of getComment) {
        if (Number(x.id) === y._id) {
          y.review.push(x);
        }
      }
    }
    this.setState({ products: products });
  };

  logIn = () => {
    this.setState({ isLogin: "block", isNotLogin: "none" });
  };

  render() {
    const {
      products,
      data,
      dataAddProduct,
      textValue,
      isDisplay,
      items,
      filter,
      isDisplayComponent,
      userLogin,
      isLogin,
      isNotLogin,
    } = this.state;
    const {
      addCardProduct,
      deleteCardProduct,
      plus,
      minus,
      getCount,
      getDataItemCart,
      outItem,
      SearchItem,
      ChangeState,
      filterItem,
      HighttoLow,
      LowtoHight,
      ChangeState1,
      Pagination,
      onClickBlock,
      onClickNone,
      addComment,
      Reload,
      logIn,
      ReloadAll,
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          data,
          dataAddProduct,
          textValue,
          isDisplay,
          items,
          filter,
          isDisplayComponent,
          userLogin,
          isLogin,
          isNotLogin,
          addCardProduct,
          deleteCardProduct,
          plus,
          minus,
          getCount,
          getDataItemCart,
          outItem,
          SearchItem,
          ChangeState,
          filterItem,
          HighttoLow,
          LowtoHight,
          ChangeState1,
          Pagination,
          onClickBlock,
          onClickNone,
          addComment,
          Reload,
          ReloadAll,
          logIn,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
