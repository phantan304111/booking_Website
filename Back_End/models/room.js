const Schema = mongoose.Schema;

const roomSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  maxPeople:{
    type:Number,
    required:true
  },
  desc:{
    type:String,
    required:true,
  },
  roomNumbers:[{
    type:[Number],
    required:true,
  }],
},
{
  collection:"Room"
})

module.exports = mongoose.model('Room',roomSchema); 