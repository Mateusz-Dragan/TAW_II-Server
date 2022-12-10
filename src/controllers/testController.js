import models from "../models/index.js";

const Test = models.Test

export default class TestController {

    create = async (req, res) => {

        if (await Test.checkIfTestNameExists(req.body.test_name)) {
            res.send('Test of this name already exists')
            return
        }
        Test.create(req.body)
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

    findOne = (req, res) => {
        const id = req.params.id;
        Test.findByPk(id).then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Tutorial with id=${id}.`
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Tutorial with id=" + id
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
                    message:
                        err.message || "Some error occurred while retrieving the Tests."
                });
            });
    };

    delete = (req, res) => {
        const id = req.params.id;

        Test.destroy({
            where: {id: id}
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "Tutorial was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Tutorial with id=" + id
                });
            });
    };

}
