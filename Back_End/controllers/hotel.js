const Hotel = require("../models/hotel");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user,
  });
  product
    .save()
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then((product) => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then((result) => {
      console.log("UPDATED PRODUCT!");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

// exports.getProducts = (req, res, next) => {
//   Product.find()
//     // .select('title price -_id')
//     // .populate('userId', 'name')
//     .then(products => {
//       console.log(products);
//       res.render('admin/products', {
//         prods: products,
//         pageTitle: 'Admin Products',
//         path: '/admin/products'
//       });
//     })
//     .catch(err => console.log(err));
// };
exports.getRooms = async (req, res, next) => {
  // Hotel.find().then(rooms=>{
  //   return res.status(400).json({ message: 'Not found film id parram' });
  // })
  Hotel.find()
    .then((hotels) => {
      let countDN = 0;
      let countHN = 0;
      let countHCM = 0;
      console.log(hotels.length);
      hotels.map((hotel) => {
        if (hotel.city === "Ha Noi") countHN++;
        else if (hotel.city === "Ho Chi Minh") countHCM++;
        else if (hotel.city === "Da Nang") countDN++;
      });
     
      res.status(200).send({
        results: hotels,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findByIdAndRemove(prodId)
//     .then(() => {
//       console.log('DESTROYED PRODUCT');
//       res.redirect('/admin/products');
//     })
//     .catch(err => console.log(err));
// };

// const getAllTransactions = async (req, res, next) => {
//   try {
//     const transactions = await Transaction.find();
//     res.locals.transactions = transactions;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
// app.get('/hotels', async (req, res) => {
//   try {
//     const hotels = await Hotel.find();
//     const types = res.locals.types;
//     res.render('hotels', { hotels, types });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });
