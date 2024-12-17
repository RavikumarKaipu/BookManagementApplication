# BookManagementApplicationAssignment: Book Management Application
Objective:
   Design and implement a Book Management System that allows users to search for books, view details, and manage book records efficiently.
Requirements
  User Interface (UI):
    1.Home Page:
        Include a navigation bar with links: Home, Contact, About, and Add Book.
        Provide a search section with filters (e.g., genres, authors) and a search button.
    2.Search Results Page:
        Display books in a grid or list format with pagination.
        Include options to view details, edit, or delete a book record.
    3.Details Page:
        Display detailed information about a selected book, including:
            1.Title
            2.Author
            3.Genre
            4.Pages
            5.Published Date
    4.Book Management Pages:
        Provide forms for adding and editing book details with appropriate input validations.
        Include a confirmation step for book deletion.
Database Schema:
    1.Books Table:
        Fields:
            BookID (Primary Key)
            Title
            AuthorID (Foreign Key)
            GenreID (Foreign Key)
            Pages
            PublishedDate
    2.Genres Table:
        Fields:
            GenreID (Primary Key)
            Name
            Description
    3.Authors Table:
        Fields:
            AuthorID (Primary Key)
            Name

Development Plan:
    1.Frontend:
          Use a modern JavaScript framework like React.js.
          Develop components for:
              Home
              Search Results
              Book Details
              Add/Edit Book
              Delete Book
Integrate Fetch API for data communication with the backend.
    2.Backend:
            Develop RESTful API endpoints using Node.js with Express.js:
            GET /books: Fetch all books.
            POST /books: Add a new book.
            PUT /books/:id: Update an existing book.
            DELETE /books/:id: Delete a book.
Database:
        Use a relational database like SQLite for data storage.

