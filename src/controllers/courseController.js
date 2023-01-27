const models = require("../models/index.js").models;

const Course = models.Course
const CourseMaterials = models.CourseMaterials

module.exports = class CourseController{
    create = async (req, res) => {
        if (req.body.course_name) {
            if (await Course.checkIfCourseNameExists(req.body.course_name)) {
                res.status(409).send({ message: 'Course of this name already exists' })
                return
            }
        }

        Course.create(req.body)
            .then(data => {
                res.status(201).send(
                    data
                );
            })
            .catch(err => {
                res.status(400).send({
                    message: 'Invalid input, object invalid'
                });
            });
    }

    findOne = (req, res) => {
        const id = req.params.id;
        Course.findByPk(id).then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Course with given id.`
                });
            }
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Course with id=" + id
                });
            });
    }

    findAll = (req, res) => {
        Course.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while retrieving the Course."
                });
            });
    };

    delete = (req, res) => {
        const id = req.params.id;

        Course.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    CourseMaterials.destroy({
                        where:{course_id:id}
                    })
                    res.send({
                        message: "Course was deleted successfully!"
                    });
                } else {
                    res.status(404).send({
                        message: `Cannot delete Course with id=${id}. Course was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete Course with id=" + id
                });
            });
    };

    update = async (req, res) => {
        const id = req.params.id;
        const FindCourseById = await Course.findOne({
            where: {
                id: id
            }
        })
        if (!FindCourseById) {
            res.status(400).send({
                message: "Could not find course of given id"
            })
            return
        }
        await Course.update({
            course_name: req.body.course_name,
            category: req.body.category
        },{where:{id:id}}).then(async data => {
            await CourseMaterials.destroy({
                where:{course_id:id}
            })
            res.send({message:'Course updated successfully'})
        }).catch(err => {
            res.status(500).send({
                message: "Something went wrong"
            });
        });
    }
}