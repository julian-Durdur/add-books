import express from 'express'
import "dotenv/config"
import mongoose from 'mongoose'
import path from 'path'
import { indexRouter } from './routes/index'
import { booksRouter } from './routes/books'
import { adminRouter } from './routes/user'


const app = express()

mongoose.connect('mongodb://localhost/bookstraining_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('express pompeleupe')
});

const { PORT } = process.env
//initialisation de pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug'); //voir doc express template engine
app.use(express.static( path.join(__dirname, "../public")))
app.use(express.urlencoded({extended:true}));
app.use('/', indexRouter)
app.use('/books', booksRouter)
app.use('/admin', adminRouter)

app.listen(PORT, () =>{
  console.log(`Server on port ${ PORT }` );
})
