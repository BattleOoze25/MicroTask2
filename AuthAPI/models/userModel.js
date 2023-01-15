const mongoose = require('mongoose')
const {isEmail} = require('validator')


const userSchema = mongoose.Schema({
    name:{
        type:'String',
        required: [true, 'Name is required']
    },
    email:{
        type:'String',
        required:[true, 'Email is Required'],
        validate:{
            validator:isEmail,
            message:(props)=>`${props.value} is not valid email address`
        }
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        validate:{
            validator:function (value){
                return value.length >=7
            },
            message:()=>'Password must be more than 7 characters long'
        }
    }
})

module.exports = mongoose.model('User', userSchema)