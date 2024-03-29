const models = require("../models/index.js").models;

const Test = models.Test
const TestQuestions = models.TestQuestions

module.exports = class TestController {

    create = async (req, res) => {
        if (req.body.test_name) {
            if (await Test.checkIfTestNameExists(req.body.test_name)) {
                res.status(409).send({ message: 'Test of this name already exists' })
                return
            }
        }

        Test.create(req.body)
            .then(data => {
                res.status(201).send(data);
            })
            .catch(err => {
                res.status(400).send({
                    message: 'Invalid input, object invalid'
                });
            });
    }

    findOne = (req, res) => {
        const id = req.params.id;
        Test.findByPk(id).then(data => {
            if (data) {
                res.status(200).send(data);
                return
            } else {
                res.status(404).send({
                    message: `Cannot find Test with given id.`
                });
                return
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Test with given id"
                });
            });
    }

    findAll = (req, res) => {
        Test.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while retrieving the Tests."
                });
            });
    };

    delete = (req, res) => {
        const id = req.params.id;

        Test.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    TestQuestions.destroy({
                        where: { test_id: id }
                    })
                    res.send({
                        message: "Test was deleted successfully!"
                    });
                } else {
                    res.status(404).send({
                        message: `Cannot delete Test with id=${id}. Test was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Test with id=" + id
                });
            });
    };

    update = async (req, res) => {
        const id = req.params.id;
        const FindTestById = await Test.findOne({
            where: {
                id: id
            }
        })
        if (!FindTestById) {
            res.status(400).send({
                message: "Could not find test of given id"
            })
            return
        }
        await Test.update({
            test_name: req.body.test_name,
            category: req.body.category,
            points: req.body.points
        }, { where: { id: id } }).then(async data => {
            await TestQuestions.destroy({
                where: { test_id: id }
            })
            res.send({ message: 'Test updated successfully' })
        }).catch(err => {
            res.status(500).send({
                message: "Something went wrong"
            });
        });
    }
}
