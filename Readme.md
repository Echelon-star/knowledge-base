# Knowledge Base API

# Technologies
- MongoDB
- Express
- Nodejs

# Endpoints
1. GET     /books          Fetches all books
2. GET     /books/:id      Fetch a Book
3. POST    /books          Add a book
4. PATCH   /books/:id      Update details of a book
5. DELETE  /books/:id      Delete a book 

# How to run the project locally
1. Fetch a copy of the project on your local machine.
2. Run "npm install" to get all the node modules.
3. Add the host, port & database name in .env as per your mongodb configuration.
4. Run "node server.js" to start the server.

# Some Assumnptions Made
1. I assumed we are connecting only on local. So username & password based configuration is not added while connecting to mongodb.


