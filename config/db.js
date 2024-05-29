import mongoose from "mongoose";

const dbConnection = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://admin:jbifnUMNxlHre7wa@cluster0.z7yya.mongodb.net/doctor-appointment?retryWrites=true&w=majority');
        if(conn){
            console.log('Database connected successfully.');
        }
    }catch(error){
        console.log(`Mongodb Error ${error.message}`)
        process.exit(1);
    }
}

export default dbConnection;