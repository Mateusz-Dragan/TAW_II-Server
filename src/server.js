const express = require('express')
const sequelize = require('./models/index.js').sequelize; 
const cors = require('cors')
const port = require('./config.js').port

const routes = require("./routes/routes.js");


const app = express()
app.use(express.json());
app.use(cors());

// sequelize.sync({ force: true })
sequelize.sync().then(() => {
    if (process.env.NODE_ENV !== 'test') {
        app.listen(port, () => console.log(`Listening on port ${port}`)
)}
    ;
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
app.get('/bonus',(req,res)=>{
    res.send('You wish this was a bonus')
})
app.use('/api', routes)



module.exports = {app,sequelize}