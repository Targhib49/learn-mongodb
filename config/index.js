const { PORT, DATABASE_LOCAL, DATABASE_LIVE } = require("./environment");
const db = require("./connection");

module.exports = {
    PORT,
    DATABASE_LOCAL,
    DATABASE_LIVE,
    db,
};
