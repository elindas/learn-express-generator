const todos = require("../../models/todos")


module.exports = {
    getAll: (req, res) => {
        res.status(200).send({
            message: "this is todos route",
            data: todos
        })
    },
    getById: (req, res) => {

        const { id } = req.params

        const filter = todos[parseInt(id) - 1]

        res.status(200).send({
            message: "test todos by id",
            data: filter
        })
    },
    deleteById: (req, res) => {
        const { id } = req.params
        todos.splice((parseInt(id) - 1), 1)



        res.status(200).send({
            message: `Delete ${id}`,
            data: todos
        })
    },
    updateById: (req, res) => {
        const { id, task } = req.body
        todos.splice(req.params.id - 1, 1, { id: parseInt(id), task })

        res.send({
            message: `Update id ke ${req.params.id}`,
            data: todos
        })
    }
}