const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required: true
  },
  fullName:{
    type:String,
    required: true
  },
  phoneNumber:{
    type:Number,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  isAdmin:{
    type:Boolean,
    required: true
  },
})

userSchema.methods.addToCart = function(product){
  const cartProductIndex = this.cart.items.findIndex(cp => {
          return cp.productId.toString() === product._id.toString();
        });
    
    
        let newQuantity = 1;
        const updatedCartItems = [...this.cart.items];
    
        if (cartProductIndex >= 0) {
          newQuantity = this.cart.items[cartProductIndex].quantity + 1;
          updatedCartItems[cartProductIndex].quantity = newQuantity;
        } else {
          updatedCartItems.push({
            // productId: new ObjectId(product._id),
            productId: product._id,//mongoose tu dong boc doan nay trong mot Id, vi scheme trong card da nhan no la mot object Id r 
            quantity: newQuantity// quatity co the giu the nay
          });
        }
        const updatedCart = {
          items: updatedCartItems
        };
        this.cart = updatedCart;
        return this.save();
        
}
userSchema.methods.removeFromCart = function(productId){
  const updatedCartItems = this.cart.items.filter(item=>{
    return item.productId.toString() !== productId.toString();
  });
  this.cart.items = updatedCartItems;
  return this.save();
}
userSchema.methods.clearCart = function(){
  this.cart ={item:[]};
  return this.save();
}
module.exports = mongoose.model('User',userSchema);
