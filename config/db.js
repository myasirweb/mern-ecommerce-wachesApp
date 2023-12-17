import mongoose from 'mongoose'

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MONGO DataBase ${conn.connection.host}`);
        
    }catch(error){

        console.log(`ERROR IN MONGO DATA BASE ${error}`);

    }
}

export default connectDB;