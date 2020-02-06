let users = require("../../models/user")


module.exports = {
    getAll: (req, res) => {
        res.status(200).send({
            message: "this is user route",
            data: users
        })
    },

    getById: (req, res) => {

        const filterById = users.filter(item => {
            if (item.id === parseInt(req.params.id)) {
                return item
            }
        })

        res.status(200).send({
            message: "get by id",
            data: filterById[0]
        })
    },

    getByEmail: (req, res) => {

        const filterByEmail = users.filter(item => {
            if (item.email === req.params.email) {
                return item
            }
        })


        res.status(200).send({
            message: `get by email ${req.params.email}`,
            data: filterByEmail
        })
    },

    deleteByEmail: (req, res) => {
        const deleteByEmail = users.filter(item => item.email !== req.params.email)
        users = deleteByEmail
        res.status(200).send({
            message: `delete by email ${req.params.email}`,
            data: users
        })
    },

    updateEmail: (req, res) => {
        const { id, firstname, lastname, username, address, email, password, age } = req.body
        let finditem = users.find(item => {
            if (item.email == req.params.email) {
                return item
            }
        })
        let index = finditem.id - 1

        users.splice(index, 1, {
            id: finditem.id, firstname: finditem.firstname,
            lastname: finditem.lastname, username: finditem.username,
            address: finditem.address, email,
            password: finditem.password, age: finditem.age
        })
        console.log('req', req.body);

        res.status(200).send({
            message: `update by email ${req.params.email}`,
            data: users

        })
    }

}