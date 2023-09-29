const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
// mongodb+srv://tanpnmfx17816:Bimat12#$@cluster0.s86qrj8.mongodb.net/?retryWrites=true&w=majority
let _db;

const mongoConnect =(callback)=>{
  MongoClient.connect('mongodb+srv://phantan:W8bGjIzwyf3lz3Qe@cluster.djjy54i.mongodb.net/test?retryWrites=true')///.mongodb.net/shop la den csdl shop
.then(client =>{
  console.log('connect');
  _db = client.db('shop')
  callback(client);
})
.catch(err=>console.log(err)); // cach ket noi voi mongodb, tra ve mot promise ma ta cothe dung thende tuong tac
}

const getDb =()=>{
  if(_db){
    return _db;
  }
  throw "no database found";
}

// module.exports = mongoConnect;
exports.mongoConnect   = mongoConnect;
exports.getDb = getDb;



// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;