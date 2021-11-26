import express from "express";

const app = express();

app.listen(3000, () => console.log("Server is running 3000"));

app.get("/", (request, response) => {
    return response.json("Hello");
});