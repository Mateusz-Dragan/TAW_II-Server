const models = require("../models/index.js").models;

const CourseMaterials = models.CourseMaterials

module.exports = class CourseMaterialsController{
    create = async (req, res) => {
        console.log(req.body)
        CourseMaterials.create(req.body)
            .then(data => {
                res.status(201).send({
                    message: "Material added successfully"
                });
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while adding the Material."
                });
            });
    }

    findMaterialsWithId = (req, res) => {
        const id = req.params.id;
        CourseMaterials.findAll({
            where:{course_id: id}
        })
            .then(data => {
                if(data){
                    res.status(200).send(data);
                }
                else{
                    res.status(404).send({
                        message:'Course material of this id does not exist'
                    })
                }
                
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some error occurred while retrieving the Materials."
                });
            });
    };
}