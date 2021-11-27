const express = require("express");

const app = express();
const router = require("./routes");
app.use(express.json());

app.use(router);

//NOT FOUND
app.use((request, response, next) => {
    const error = new Error("Not Found");
    error.status = 404;

    next(error);
});


//CATCH ALL
app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: error.message,
    })
});


app.listen(3000, () => console.log("Server is running 3000"));