import express from "express"
import models, {sequelize} from "./src/models/index.js";

import routes from "./src/routes/testroutes.js";


const app = express()
const port = 3000
app.use(express.json());

//app.use(express.json())

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`);
    })
    ;
}).catch((err) => {
    console.log("Failed to sync db: " + err.message);
});
app.get('/bonus',(req,res)=>{
    res.send('You wish this was a bonus')
})
app.use('/api', routes)

//app.listen(port, ()=>console.log(`Server is running on port ${port}`))
