const ARRAY = require("sequelize").ARRAY;

const getTestAnswersModel = (sequelize, Sequelize) => {
    const TestAnswers = sequelize.define('Test_Answers', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        test_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user_answers:{
            type: ARRAY(Sequelize.INTEGER),
            allowNull:false
        }
    });
    return TestAnswers
}
module.exports = getTestAnswersModel
