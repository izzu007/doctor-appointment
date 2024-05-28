import mongoose from "mongoose";

const dbConnection = async () => {
    try{
        const conn = await mongoose.connect('mongodb://localhost:27017/doctor_appointment');
        if(conn){
            console.log('Database connected successfully.');
        }
    }catch(error){
        console.log(`Mongodb Error ${error.message}`)
        process.exit(1);
    }
}

export default dbConnection;