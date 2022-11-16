const authorsRoutes = require("../../routes/authors.routes")
const booksRoutes = require("../../routes/books.routes")
const loginRoutes = require("../../routes/login.routes")
const express = require("express");
const passport = require("passport");
const { jwtStrategy } = require("../../config/passport");
// const bodyParser = require('body-parser');

const app = express();

const PORT = 8082

app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
passport.use("jwt",jwtStrategy);

app.use("/login",loginRoutes)
app.use("/authors",authorsRoutes);
app.use("/books",booksRoutes)

app.use((req, res, next) => {
   res.status(404).json({"message":"NOT FOUND"})
});
app.listen(PORT,()=>{
    console.log("Backend is working on port : ", PORT);  
})