const mongoose = require('mongoose')

const ConnDB = () =>{
    mongoose.connect(process.env.LOCAL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
        console.log("Connect to mongodb")
    }).catch((err)=>{
      console.log(err)
    })
}
module.exports = ConnDB;

