
const getTestResultsModel = (sequelize, Sequelize) => {
    const TestResults = sequelize.define('Test_Results', {
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
        points: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        max_points:{
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return TestResults
}
export default getTestResultsModel
