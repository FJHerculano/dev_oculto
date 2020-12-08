const mongoose = require('mongoose')
//
let conn = null

const URI = 'mongodb+srv://secret:bC6DoLD1cUsj7Fy0@cluster0.opmsg.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async()=>{
  if(!conn){
    conn = mongoose.connect(URI,{
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    await conn
  }
}