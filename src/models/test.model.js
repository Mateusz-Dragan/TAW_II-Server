const getTestModel = (sequelize, Sequelize) => {
    const Test = sequelize.define('Test', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        test_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        points: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    });
    Test.checkIfTestNameExists = async(testName)=>{
        let test = await Test.findOne({
            where:{test_name: testName}
        })
        return test
    }
    return Test
}
export default getTestModel
