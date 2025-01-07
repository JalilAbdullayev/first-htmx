import express from 'express';
import createHomeTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import books_data from "./data/data.js";
import createBookTemplate from "./views/book.js";

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
    res.send(createListTemplate());
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

// listen to port
app.listen(3000, () => {
    console.log('App listening on port 3000');
});