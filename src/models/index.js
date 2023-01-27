const Sequelize = require('sequelize');
const env = require("../env.js");
const getTestModel = require("./test.model.js");
const getTestQuestionsModel = require('./testQuestions.model.js');
const getTestAnswersModel = require("./testAnswers.model.js");
const getTestResultsModel = require("./testResults.model.js");
const getCourseModel = require("./course.model.js")
const getCourseMaterialsModel = require("./courseMaterials.model.js")
const getUserModel = require('./user.model')


const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: 0,
    logging: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const models = {
    Test: getTestModel(sequelize, Sequelize),
    TestQuestions: getTestQuestionsModel(sequelize, Sequelize),
    TestAnswers: getTestAnswersModel(sequelize, Sequelize),
    TestResults: getTestResultsModel(sequelize, Sequelize),
    Course: getCourseModel(sequelize, Sequelize),
    CourseMaterials: getCourseMaterialsModel(sequelize, Sequelize),
    User: getUserModel(sequelize, Sequelize)
};

// Object.keys(models).forEach((key) => {
//     if ('associate' in models[key]) {
//         models[key].associate(models);
//     }
// });

module.exports = { sequelize, models };

