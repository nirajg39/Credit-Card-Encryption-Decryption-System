import mongoose from "mongoose";
import moment from 'moment'

const tokenSchema = mongoose.Schema({
    number : {
        type : String , 
        min : 16 , 
        max : 16 , 
        required : true  
    } , 
    token : {
        type : String , 
        required : true 
    } 
})

export default mongoose.model('tokens', tokenSchema)