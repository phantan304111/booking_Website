// npm install --save mongodb

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect =(callback)=>{
  MongoClient.connect('mongodb+srv://tanpnmfx17816:Bimat12#$@cluster0.s86qrj8.mongodb.net/?retryWrites=true&w=majority')
.then(client =>{
  console.log('');
  callback(client);
})
.catch(err=>console.log(err)); // cach ket noi voi mongodb, tra ve mot promise ma ta cothe dung thende tuong tac
}
module.exports = mongoConnect;

//ket noi voi mongodb
//file db
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoConnect =(callback)=>{
  MongoClient.connect('mongodb+srv://tanpnmfx17816:3004@cluster0.s86qrj8.mongodb.net')
.then(client =>{
  callback(client);
})
.catch(err=>console.log(err));
}
module.exports = mongoConnect;
//file app
const mongoConnect = require('./util/database')
mongoConnect(client=>{
  console.log(client);
  app.listen(3000);
})
/////////////tao ket noi db

////////////////
//////////thiet lap mongodb
npm install --save mongodb

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
/////////////tao connect
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
// mongodb+srv://tanpnmfx17816:Bimat12#$@cluster0.s86qrj8.mongodb.net/?retryWrites=true&w=majority
let _db;

const mongoConnect =(callback)=>{
  MongoClient.connect('mongodb+srv://phantan:W8bGjIzwyf3lz3Qe@cluster.djjy54i.mongodb.net/shop?retryWrites=true')///.mongodb.net/shop la den csdl shop
.then(client =>{
  console.log('connect');
  _db = client.db('test')//////ham ket noi va luu tru ket noi
  callback(client);
})
.catch(err=>console.log(err)); // cach ket noi voi mongodb, tra ve mot promise ma ta cothe dung thende tuong tac
}

const getDB =()=>{////////ham tra ve quyen truy cap vao
  if(_db){
    return _db;
  }
  throw "no database found";
}
//sau do ta co the import getDB de truy cap csdl tu file khac
const mongodb = require('mongodb');
const getDB =  require('../util/database').getDB;
// module.exports = mongoConnect;
exports.mongoConnect   = mongoConnect;
exports.getDB = getDB;

//// cac thanh phan cua mongodb
MongoClient
ham:  find({doi tuong muon tim})// tra ve cursor thay vi promise. vd find({title:...}), find({.}).toArray().then.catch
//củo la mot doi tuong duoc tao boi mongodb, co tac dung cho phep ta xem qua tung phan tu, tai lieu cua minh ve mat li thuyet trong 1 collection
//tao class models
class Product{
  constructor(title, price, description,imageURL, id){
    this.title= title;
    this.price = price;
    this.description=description;
    this.imageURL = imageURL;
    this._id = id;
  }

  save(){ 
    const db = getDB();
    // db.collection('products').insertOne({name:'A Book',price:12.99}).then().catch();
    let db0p;
    if(this._id){////update hoac insert du lieu
      db0p=db.collection('products').updateOne({_id: new mongodb.ObjectId(this._id)}, {$set:this});/////updateone nhan 2 doi so, phan tu can cap nhat va doi tuong mo ta cap nhat, vi cap nhat khong phai thay the nen khong the dung this
    }
    else{
      db0p=db.collection('products').insertOne(this);
    // return db.collection('prodcuts').insertOne(this)  
    // return db.collection('prodcuts').insertMany([])  
    // db.collection('prodcuts').insertOne({name:'a book', price:23.99});
    }
    ////ca hai deu tra ve mot promise nen ta co the dung then catch de tuong tac 
   return db0p.then(result=>{
      console.log(result);
    }).catch(err=>{
      console.log(err);
    });

  }
}