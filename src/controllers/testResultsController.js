const models = require("../models/index.js").models;

const TestResults = models.TestResults

module.exports = class TestResultsController {

    findLast = (req, res) =>{
        const testId = req.params.testId;
        const userId = req.params.userId;
        TestResults.findOne({where:{test_id: testId, user_id: userId},order: [ [ 'createdAt', 'DESC' ]],}).then(
            data=>{
                res.send(data)
            }
        ).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the Results."
            });
        });

    }

    findAll = (req, res) =>{
        TestResults.findAll().then(data=>{
            res.send(data)
        }).catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving the Results."
                });
            });

    }
}
