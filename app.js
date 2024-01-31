const express = require("express");

const app = express()


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }))



const PORT = process.env.PORT || 4000

console.log(PORT);

app.get("/", (res, req) => {
    req.send("test application 2")
})



app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})