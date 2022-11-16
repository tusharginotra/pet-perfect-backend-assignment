const { faker } = require('@faker-js/faker');

  function createRandomAuthor(){

    const sex = faker.name.sexType();
  const firstName = faker.name.firstName(sex);
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const name = firstName +" " + lastName;
    return {
      _id: faker.datatype.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      phone_no : faker.phone.number(),
      email,
      name,
      sex,
      no_of_books : faker.datatype.number({min:2,max:5})
    };
  }
  const authors=[];
  for( let i=0; i<10;i++)
  {
    let author = createRandomAuthor();
    authors.push(author);
  }
  
  
  module.exports = {authors};