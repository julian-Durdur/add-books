import express from 'express'
import { Book } from '../models/book'
const booksRouter = express.Router()
//doc multer
import multer from "multer"
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '-' +file.originalname)
  }
})

const upload = multer({ storage: storage }).single("img")

booksRouter.get('/', (req, res) => {
  Book.find({}, (err, books)=> {
    if(err) console.log(err)
    res.render("allBook", {
      books
    })
  })
})

booksRouter.get('/add_book', (req, res) => {
  res.render('add_book')

})

booksRouter.post('/add_book', upload, (req, res) => {
  const datas = req.body
  datas["img"]= req.file.filename//recuperer la clef img dans l'objet datas(form)
  const newBook = new Book(datas)
  newBook.save((err, book) => {
    if(err) res.send(err)
    res.redirect("/books")
  })
})

export { booksRouter }
