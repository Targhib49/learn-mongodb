const mongoose = require("mongoose")
const Schema = mongoose.Schema

const moviesSchema = new Schema ({
    title: {
        type: String,
        default: "Movie Title"
    },
    genre: {
        type: String,
        deafult: "Movie Genre"
    },
    poster:String,
    release_year:String,
    userID:{
        type: Schema.Types.ObjectId,
        ref: "users",
    }
})

const Movies = mongoose.model("movies", moviesSchema);

module.exports = Movies;