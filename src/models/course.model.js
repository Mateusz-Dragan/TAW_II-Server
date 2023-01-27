const getCourseModel = (sequelize, Sequelize) => {
    const Course = sequelize.define('Course', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        test_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        course_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });
    Course.checkIfCourseNameExists = async(courseName)=>{
        let course = await Course.findOne({
            where:{course_name: courseName}
        })
        return course
    }
    return Course
}
module.exports = getCourseModel
