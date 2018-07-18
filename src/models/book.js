import mongoose from 'mongoose'


const Schema = mongoose.Schema

const bookSchema = new Schema({
  title:{type: String, trim:true},
  author:{type: String, trim:true},
  years:{type:Date, default:Date.now()},
  description:{type: String},
  img:{type: String}
})

const Book = mongoose.model("Book", bookSchema)

export { Book }
