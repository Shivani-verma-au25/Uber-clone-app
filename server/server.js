import app from './src/app.js'
import connectToDB from './src/db/db.js';
const PORT = process.env.PORT || 4000


connectToDB()
.then(() =>{
    app.listen(PORT ,() =>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((e) =>{
    console.log("Mongo db connection error => ",e);
    
})


