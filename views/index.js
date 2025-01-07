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
    <div class="book-list">
        <button hx-get="/books" hx-target=".book-list">
            Show Books
        </button>
    </div>
    <div class="add-book-form">
        <h2>
            What do you want to read?
        </h2>
    </div>
</main>
<script src="https://unpkg.com/htmx.org@2.0.4"
    integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
</body>
</html>
`;

export default createHomeTemplate;