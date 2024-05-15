import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()
 
const connectToMongoDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/connected')
    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to MongoDo", error.message)
  }
}
 
export default connectToMongoDb;