const { User } = require("../../models");
const md5 = require("md5")
const bcrypt = require("bcryptjs");

module.exports = {
    getAll: async (req, res) => {
        try {
            const users = await User.find({});
            console.log(md5("123"));
            

            res.status(200).json({ message: "Get All Users", data: users });
        } catch (error) {
            console.log(error);
        }
    },
    create: (req, res) => {
        try {
            const { fullname, username, email, password } = req.body;

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, async function (err, hash) {
                    const users = await User.create({
                        fullname,
                        username,
                        email,
                        password: hash,
                    });

                    res.status(201).json({
                        message: "Add New User is successfully",
                        data: users,
                    });
                });
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
    login: async (req, res) => {
        const { email, password } = req.body;

        const result = await User.findOne({ email: email });

        bcrypt.compare(password, result.password).then((response) => {
            if (response === true) {
                res.status(200).send(result);
            } else {
                res.status(401).send({
                    message: "Your are not allowed to enter this api",
                });
            }
        });
    }
};
