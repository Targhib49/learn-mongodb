const express = require("express");
const app = express();
const { PORT, db } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello to NoSQL API" });
});

app.use("/users", require("./routes/users"));

if (db) {
    app.listen(PORT, () => {
        console.log(`This app is listen on PORT: ${PORT}`);
    });
}
