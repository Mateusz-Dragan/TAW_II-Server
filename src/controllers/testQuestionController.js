import models from "../models/index.js";

const TestQuestions = models.TestQuestions

export default class TestQuestionsController {

    create = async (req, res) => {
        TestQuestions.create(req.body)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while adding the Test."
                });
            });
    }

    findQuestionsWithId = (req, res) => {
        const id = req.params.id;
        TestQuestions.findAll({
            where:{test_id: id}
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving the Questions."
                });
            });
    };
}
