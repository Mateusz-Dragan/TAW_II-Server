const ARRAY = require("sequelize").ARRAY;

const getTestQuestionsModel = (sequelize, Sequelize) => {
    const TestQuestion = sequelize.define('TestQuestions', {
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
        question: {
            type: Sequelize.STRING,
            allowNull: false
        },
        correct_answer: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        answers:{
            type: ARRAY(Sequelize.STRING),
            allowNull:false
        }
    });
    return TestQuestion
}
module.exports = getTestQuestionsModel
