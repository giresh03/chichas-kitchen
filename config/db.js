import mongoose from "mongoose";

 export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://Girish623:Girish623@cluster0.fo8np.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("DB Connected"));

}