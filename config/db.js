import mongoose, { mongo } from "mongoose";


const conn = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI);
        if(connection) {
            console.log("DB connect succesfull");
        }else {
            console.log("DB connect failed!!");
        }
    } catch (err) {
        console.log(err)
    }
}

export default conn;