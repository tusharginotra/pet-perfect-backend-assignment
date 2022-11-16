const {AllBooks} = require("../Faker_models/author.books")
const Books = require('../users.json')["Books"]

const getAllBooks = (req,res)=>{
    res.status(200).json(AllBooks);
}

const likeBook = (req,res)=>{
    const {id} = req.params;
    const userId = req.user.id;
    let likeByUser = [];
    let index = -1;
    for( let i=0;i<Books.length;i++)
    {
        if(Books[i]["likedBy"] === userId)// if any book has liked by user
        {
            likeByUser = Books[i]["likedBooks"]
            index = i ;
            break;
        }
    }
    const bookId = id;
    for( let i=0;i<likeByUser.length;i++)// checking whether this book is liked by user
    {
        if( likeByUser[i]=== bookId)
        {
             return res.status(200).json({"message" : "You have already liked it"}).send()
        }
    }
    let liked = false
    for( let i=0;i<AllBooks.length;i++)
    {
        if(AllBooks[i]._id === id )
        {
            liked = true;
           AllBooks[i].likes =  AllBooks[i].likes + 1;
            Books[index]["likedBooks"].push(bookId);
        }
        
    }
    if( !liked)
    {
        return res.status(400).json({"message":"Book doesn't exist"}).send()
    }
    res.status(200).json(AllBooks);
}
const unlikeBook = (req,res)=>{
    const {id} = req.params;
    
    const userId = req.user.id;
    let unlikedByUser = [];
    let index = -1;
    for( let i=0;i<Books.length;i++)
    {
        if(Books[i]["likedBy"] === userId)// if any book has liked by user
        {
            unlikedByUser = Books[i]["unlikedBooks"]
            index = i;
            break;
        }
    }
    const bookId = id;
    for( let i=0;i<unlikedByUser.length;i++)// checking whether this book is liked by user
    {
        if( unlikedByUser[i]=== bookId )
        {
           return res.status(200).json({"message" : "You have already disliked it"}).send()
        }
    }
    let unliked = false;
    for( let i=0;i<AllBooks.length;i++)
    {
        if(AllBooks[i]._id === id )
        {
            unliked = true;
           AllBooks[i].likes =  AllBooks[i].likes >1 ? AllBooks[i].likes - 1 : AllBooks[i].likes;
           Books[index]["unlikedBooks"].push(bookId);
        }
        
    }
    if(!unliked)
    {
       return res.status(400).json({"message":"Book doesn't exist"}).send()

    }
    res.status(200).json(AllBooks);
}

module.exports = {getAllBooks,likeBook,unlikeBook}