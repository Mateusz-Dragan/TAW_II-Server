const models = require("../models/index.js").models;

const TestQuestions = models.TestQuestions

module.exports = class TestQuestionsController {

    create = async (req, res) => {
        TestQuestions.create(req.body)
            .then(data => {
                res.status(201).send({
                    message: "Question added successfully"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while adding the Question."
                });
            });
    }

    findQuestionsWithId = (req, res) => {
        const id = req.params.id;
        TestQuestions.findAll({
            where:{test_id: id}
        })
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while retrieving the Questions."
                });
            });
    };
}
