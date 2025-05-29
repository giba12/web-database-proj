//Made by Gina Bain
import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://giba:saGEpapnHmZYzaDw@cluster0.zog7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0') //process.env.MONGO_URL
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch(error){ 
        console.log("Error connecting to mongoDB: ", error)
        process.exit(1)
    }
}
export default connectDB;
