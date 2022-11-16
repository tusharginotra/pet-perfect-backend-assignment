const { faker } = require('@faker-js/faker');
const {authors} = require("../Faker_models/authors.js")

  function createRandomBook(author){
    const title = "The " + faker.word.verb() +"ing " + faker.word.noun();
    return {
      _id: faker.database.mongodbObjectId(),
      name : author.name,
     likes : faker.datatype.number({min : 100,max : 1000}),
     author_id : author._id,
     title
    };
  }
  const AllBooks = [];
  for( let i=0;i<authors.length;i++)
  {
    let author = authors[i];
    let no_of_books = author.no_of_books;
    for( let j=0;j<no_of_books;j++)
    {
        let book = createRandomBook(author);
        AllBooks.push(book);
    }
  }
  
  
  module.exports = {AllBooks};

