const { User } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({});

            res.status(200).json({ message: "Get All Users", data: users });
        } catch (error) {
            console.log(error);
        }
    },
    create: async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body;

            const users = await User.create({
                fullname,
                username,
                email,
                password,
            });

            res.status(201).json({
                message: "Add New User is successfully",
                data: users,
            });
        } catch (error) {
            console.log(error);
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { fullname, username, email, password } = req.body;

            const result = await User.findByIdAndUpdate(id, {
                $set: {
                    fullname,
                    username,
                    email,
                    password,
                },
            });

            res.status(200).json({
                message: `Edit user with id : ${id} is successfully`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
    deleteByID: async (req, res) => {
        try {
            const { id } = req.params;

            const result = await User.findByIdAndRemove(id);

            res.status(200).json({
                message: `User with id : ${id} is successfully deleted`,
                data: result,
            });
        } catch (error) {
            console.log(error);
        }
    },
};
