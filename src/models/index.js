import Sequelize from 'sequelize';
import env from "../env.js";
import getTestModel from "./test.model.js";
import getTestQuestionsModel from './testQuestions.model.js';
import getTestAnswersModel from "./testAnswers.model.js";
import getTestResultsModel from "./testResults.model.js";


const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

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
};

// Object.keys(models).forEach((key) => {
//     if ('associate' in models[key]) {
//         models[key].associate(models);
//     }
// });

export { sequelize };

export default models;
