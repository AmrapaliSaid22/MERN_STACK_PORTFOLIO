import mongoose from "mongoose";

 export const dbConnection = () => {
    mongoose.connect (process.env.MONGO_URL, {
        dbName : "PORTFOLIO"
    }) .then (() => {
        console.log("Connectioed to databse.");
    }) . catch ((error) => {
        console.log(`Connection failed : ${error}`);
        
    })
};

// export default dbConnection;