const createHomeTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="/styles.css"/>
<title>
    My Reading List
</title>
</head>
<body>
<header>
    My Reading List
</header>
<main>
    <div class="search" style="text-align: center">
        <input type="search" name="search" placeholder="Search" hx-post="/books/search"
            hx-trigger="keyup changed delay:300ms" hx-target=".book-list"/>
    </div>
    <div class="book-list">
        <button hx-get="/books" hx-target=".book-list">
            Show Books
        </button>
    </div>
    <div class="add-book-form">
        <h2>
            What do you want to read?
        </h2>
        <form hx-post="/books" hx-on::after-request="document.querySelector('form').reset()" hx-target=".book-list ul"
        hx-swap="beforeend">
            <input type="text" name="title" placeholder="Title" required/>
            <input type="text" name="author" placeholder="Author" required/>
            <button>
                Add Book
            </button>
        </form>
    </div>
</main>
<script src="https://unpkg.com/htmx.org@2.0.4"
    integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
</body>
</html>
`;

export default createHomeTemplate;