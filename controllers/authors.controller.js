const {AllBooks} = require("../Faker_models/author.books")

const {authors} = require("../Faker_models/authors.js")
const getAllAuthors = (req,res)=>{
    res.status(200).json(authors);

}
const getBooksByAuthorsId = (req,res)=>{
    const {id} = req.params;
    let books = [];
    for( let i=0;i<AllBooks.length;i++)
    {
        if( AllBooks[i].author_id === id )
        {
            books.push(AllBooks[i]);
        }
    }
    res.status(200).json(books);

}
const getDetailOfUser = (req,res)=>{
    res.status(200).json({"email" : req.user.email,"userId": req.user.id})
}
module.exports = {getAllAuthors,getBooksByAuthorsId,getDetailOfUser};