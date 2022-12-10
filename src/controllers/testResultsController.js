import models from "../models/index.js";

const TestResults = models.TestResults

export default class TestResultsController {

    create = async (req, res) => {
        // if(await Test.findOne({where:{id:req.body.test_id}}))
        // {
        //     TestAnswers.create(req.body)
        //         .then(data => {
        //
        //             res.send(data);
        //         })
        //         .catch(err => {
        //             res.status(500).send({
        //                 message:
        //                     err.message || "Some error occurred while adding the answers to the test."
        //             });
        //         });
        // }
        // else{
        //     res.send('Cannot send answers to a test that does not exist')
        // }
    }

    findLast = (req, res) =>{
        const id = req.params.id;
        TestResults.findOne({where:{test_id: id},order: [ [ 'createdAt', 'DESC' ]],}).then(
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
