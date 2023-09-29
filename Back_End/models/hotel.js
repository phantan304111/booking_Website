const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
  distant:{
    type:Number,
    required:true
  },
  photos:[{
    type:String,
    required:true,
  }],
  desc:{
    type:String,
    required:true,
  },
  rating:{
    type:Number,
    required:true,
  },
  featured:{
    type:Boolean,
    required:true,
  },
  // items: [{productId:{type:Schema.Types.ObjectId, ref:"Product", required: true},quantity:{type: Number, required:true}}]

  rooms:{
    type:Schema.Types.ObjectId,
    ref:'Room',
    required:true
  }
}
,{
  collection:"hotel"
})

module.exports = mongoose.model('hotel',hotelSchema);