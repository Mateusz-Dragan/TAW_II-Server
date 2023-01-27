const models = require("../models/index.js").models;

const Test = models.Test
const TestAnswers = models.TestAnswers
const TestQuestions = models.TestQuestions
const TestResults = models.TestResults

module.exports = class TestAnswersController {

    create = async (req, res) => {
        if(await Test.findOne({where:{id:req.body.test_id}}))
        {
            TestAnswers.create(req.body)
                .then(async data => {
                    const test = await Test.findOne({ attributes:["points"],
                        where: {id: req.body.test_id}, raw: true})
                    const testQuestions = await TestQuestions.findAll({ attributes:["correct_answer"],
                        where: {test_id: req.body.test_id}, raw: true})
                    let points = 0

                    for(let i = 0; i< testQuestions.length; i++){
                        if(req.body.user_answers[i] === testQuestions[i].correct_answer){
                            points += 1
                        }
                    }

                    await TestResults.create({test_id: req.body.test_id, user_id: req.body.user_id, points: points, max_points: test.points})

                    res.status(201).send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message:
                            err.message || "Some error occurred while adding the answers to the test."
                    });
                });
        }
        else{
            res.send('Cannot send answers to a test that does not exist')
        }
    }
}
