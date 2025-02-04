import mongoose from "mongoose";
import {DB_NAME} from '../constant.js'


const connectToDB = async() => {
    try {
        const conntectionInstance = await mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}/${DB_NAME}`)
        console.log("Mongo db connected host =>",conntectionInstance.connection.host);
        
    } catch (error) {
        console.log("mongo db error =>" ,error);
        process.exit(1)
        
    }
}


export default connectToDB