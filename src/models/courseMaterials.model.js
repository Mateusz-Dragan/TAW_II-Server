const getCourseMaterialsModel = (sequelize, Sequelize) => {
    const CourseMaterial = sequelize.define('Course_Materials', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        course_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    
    return CourseMaterial
}
module.exports = getCourseMaterialsModel
