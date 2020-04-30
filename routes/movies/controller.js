const { Movies } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const {userID} = req.query;

            if(userID){
                const filterByuserID = await Movies.find({userID:userID})

                res.status(200).json({ message: "Get All Movies", data: filterByuserID });
            } else {
                const movies = await Movies.find({}).populate("userID");

                res.status(200).json({ message: "Get All Movies", data: movies });
            }

            
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const { title, genre, release_year, userID, poster } = req.body;
                const movies = await Movies.create({
                    title,
                    genre,
                    release_year,
                    userID,
                    poster
                });

                res.status(201).json({
                    message: "Add New Movies is successfully",
                    data: movies,
                });
        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, genre, release_year, poster } = req.body;

            const result = await Movies.findByIdAndUpdate(id, {
                $set: {
                    title,
                    genre,
                    release_year,
                    poster
                },
            });

            res.status(200).json({
                message: `Edit Movies with id : ${id} is successfully`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteByID: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await Movies.findByIdAndRemove(id);

            res.status(200).json({
                message: `Movies with id : ${id} is successfully deleted`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    }
};
