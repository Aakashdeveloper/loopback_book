module.exports = function(app) {
  app.dataSources.books.automigrate('books', function(err) {
    if (err) throw err;
 
    app.models.books.create([
      {name: 'Advantage India', price: '120', release_date: "11/11/2015"},
      {name: 'Cometh The Hour ', price: '180', release_date: "10/10/2015"},
      {name: 'Our Impossible Love ', price: '140', release_date: "12/12/2015"},
    ], function(err, books) {
      if (err) throw err;
 
      console.log('Models created: \n', books);
    });
  });
  app.dataSources.author.automigrate('author', function(err) {
    if (err) throw err;
 
    app.models.author.create([
      {age: '40', authorName: 'Srijan Pal Singh', numberOfBooks: "11"},
      {age: '30', authorName: 'Jeffrey Archer', numberOfBooks: "10"},
      {age: '50', authorName: 'Durjoy Dutta', numberOfBooks: "12"},
    ], function(err, author) {
      if (err) throw err;
 
      console.log('Models created: \n', author);
    });
  });
};


/*var async = require('async');

module.exports = function(app) {
  // data sources
  var books = app.dataSources.books;
  var author = app.dataSources.author;

  // create all models
  async.parallel({
    author: async.apply(createAuthor),
    books: async.apply(createBooks)
  });

  // create author
  function createAuthor(cb) {
    author.automigrate('author', function(err) {
      if (err) return cb(err);

      app.models.Author.create([
		  {age: '40', authorName: 'Srijan Pal Singh', numberOfBooks: "11"},
		  {age: '30', authorName: 'Jeffrey Archer', numberOfBooks: "10"},
		  {age: '50', authorName: 'Durjoy Dutta', numberOfBooks: "12"}
      ], cb);
    });
  }

  // create books
  function createBooks(cb) {
    books.automigrate('books', function(err) {
      if (err) return cb(err);

      app.models.Books.create([
        {name: 'Advantage India', price: '120', release_date: "11/11/2015"},
        {name: 'Cometh The Hour ', price: '180', release_date: "10/10/2015"},
        {name: 'Our Impossible Love ', price: '140', release_date: "12/12/2015"}
      ], cb);
    });
  }


};*/