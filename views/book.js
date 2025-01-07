const createBookTemplate = book => `
<li data-id="${book.id}">
    <div class="details">
        <h3>
            ${book.title}
        </h3>
        <p>
            ${book.author}
        </p>
        <button hx-delete="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">
            Delete
        </button>
    </div>
</li>
`;

export default createBookTemplate;