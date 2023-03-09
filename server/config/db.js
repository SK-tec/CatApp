const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_STRING,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log('MongoDB connected Successfully');
    } catch(error){
        console.error('MongoDB connection error',error);
        process.exit(1);
    };

   
}
module.exports=connectDB;