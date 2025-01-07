import express from 'express';
import createHomeTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import books_data from "./data/data.js";
import createBookTemplate from "./views/book.js";
import createEditTemplate from "./views/edit.js";

// create app
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.send(createHomeTemplate());
});

app.get('/books', (req, res) => {
    res.send(createListTemplate(books_data));
});

app.post('/books', (req, res) => {
    const {title, author} = req.body;
    const id = Math.random().toString();
    books_data.push({id, title, author});
    res.redirect(`/books/${id}`);
});

app.get('/books/:id', (req, res) => {
    const {id} = req.params;
    const book = books_data.find(book => book.id === id);
    res.send(createBookTemplate(book));
});

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const idx = books_data.findIndex(book => book.id === id);
    books_data.splice(idx, 1);
    res.send();
});

app.get('/books/edit/:id', (req, res) => {
    const book = books_data.find(book => book.id === req.params.id);
    res.send(createEditTemplate(book));
});

app.put('/books/:id', (req, res) => {
    const {title, author} = req.body;
    const {id} = req.params;
    const newBook = {title, author, id};
    const idx = books_data.findIndex(book => book.id === id);
    books_data[idx] = newBook;
    res.send(createBookTemplate(newBook));
});

app.post('/books/search', (req, res) => {
    const text = req.body.search.toLowerCase();
    const books = books_data.filter(book => book.title.toLowerCase().includes(text));
    res.send(createListTemplate(books));
});

// listen to port
app.listen(3000, () => {
    console.log('App listening on port 3000');
});