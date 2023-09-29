const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const errorController = require("./controllers/error");
const mongoose = require("mongoose");
// const mongoConnect = require("./util/database").mongoConnect;

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
const hotelRouter = require('./routes/hotel')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use('/:API',cors(),(req,res,next)=>{
  const token = req.params.API;///nhan ve phan token API tu front end
});

app.use((req, res, next) => {
//   // User.findById("64cf38a0b1ca6f01f687baed")


  User.findById("650834ad88df076c337d2253")//
    .then((user) => {
      // console.log(user);
      //req.user = user;//khi goi the nay, user duoc nhan la du lieu duoc lay tu csdl, khong co cac phuong thuc cua class use, nen ta nen tao lass user va gan du lieu nhan vao vao no
      // req.user = new User(user.name, user.email, user.cart, user._id);
      req.user = user;//nhung voi mongoose, user la mot model mongodb_ hoan chinh

      //nap user tim thay, dat vao phan req de cac ham middleware sau se dung chinh req.user nay
      next();
    })
    .catch((err) => console.log(err));
  next();
});

app.use(cors(),hotelRouter);

// app.use("/admin", adminRoutes);
// app.use(shopRoutes);

app.use(errorController.get404);


mongoose
  .connect(
    "mongodb+srv://phantan:W8bGjIzwyf3lz3Qe@cluster.djjy54i.mongodb.net/booking?retryWrites=true"
  )
  .then((result) => {
    User.findOne().then(user=>{
      if(!user){
        const user = new User({
          username: "tan",
          password: "11111111",
          fullName: "phantan",
          phoneNumber: 11111111,
          email:"phanngocminhtann@gmail.com",
          isAdmin:true
        });
        user.save();

      }
    })
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
