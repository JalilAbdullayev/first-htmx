import createBookTemplate from "./book.js";

const createListTemplate = books => `
<ul>
    ${books.map(book => createBookTemplate(book)).join('')}
</ul>
`;

export default createListTemplate;