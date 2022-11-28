import mongoose from "mongoose";
import moment from 'moment' ; 

const cardSchema = mongoose.Schema({
    name : {
        type : String , 
        min : 4 , 
        required : true 
    } , 
    number : {
        type : String , 
        min : 16 , 
        max : 16, 
        required : true  
    } , 
    expiry : {
        type : String , 
        min : 4 ,   
        required : true  
    } , 
    cvv : {
        type : String , 
        required : true 
    } , 
    date : {
        type : Date , 
        default : moment().format('LLL')
    }
})

export default mongoose.model('cards' , cardSchema)