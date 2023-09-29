const Product = require("../models/product");
const Order = require("../models/order");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/product-list", {
        prods: products,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        pageTitle: product.title,
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.getIndex = (req, res, next) => {
  // // Product.fetchAll()
  // Product.find()
  //   .then((products) => {
  //     res.render("shop/index", {
  //       prods: products,
  //       pageTitle: "Shop",
  //       path: "/",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

exports.getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    // .execPopulate()// ham doi populate thanh promise, tuy nhien populate hien tai da chinh thanh tra ve promise, ham nay khong ton tai nua
    // .getCart()
    .then((user) => {
      // return cart
      //   .getProducts()
      //   .then((products) => {
      const products = user.cart.items;
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: products,
      });
      // })
      //     .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      // console.log(product);

      return req.user.addToCart(product);
    })
    .then((result) => {
      console.log(result);

      res.redirect("/cart");
      // console.log(result);
    });
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .removeFromCart(prodId)
    // .then((cart) => {
    //   return cart.getProducts({ where: { id: prodId } });
    // })
    // .then((products) => {
    //   const product = products[0];
    //   return product.cartItem.destroy();
    // })
    .then((result) => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.postOrder = (req, res, next) => {
  req.user.populate("cart.items.productId").then((user) => {
    const products = user.cart.items.map((i) => {
      return { quantity: i.quantity, product: {...i.productId._doc} };//co the xai lenh _doc nay de truy cap cac du lieu dinh kiem,
      //vi productId co rat nhieu du lieu an dinh kem sau do chung diuoc rteurn vao product voi spread ...
    });
    const order = new Order({
      user: {
        name: req.user.name,
        userId: req.user
      },
      products:products
    });
    return order.save();
  }).then((result) => {
      return req.user.clearCart();
    }).then(()=>{
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};
exports.getOrders = (req, res, next) => {
  Order.find({"user.userId":req.user._id})
  // req.user
  //   .getOrders()
    .then((orders) => {
      res.render("shop/orders", {
        path: "/orders",
        pageTitle: "Your Orders",
        orders: orders,
      });
    })
    .catch((err) => console.log(err));
};