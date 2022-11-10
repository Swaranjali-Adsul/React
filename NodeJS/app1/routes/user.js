const db=require('../database')
const utils=require('../utils')
const cryptoJs=require('crypto-js')
const express=require('express')

const router=express.Router()

router.post('/signup',(request,response)=>
{

    const {firstName,lastName,email,password}=request.body
    

    const connection=db.openConnection()

    const encryptedPassword=cryptoJs.SHA256(password)

    statement=`insert into user (firstName,lastName,email,password) values ('${firstName}','${lastName}','${email}','${encryptedPassword}')`
    
    connection.query(statement,(error,signupDetails)=>
    {
        connection.end()

        const result=utils.createResult(error,signupDetails)

        response.send(result)
    }
    )
})


router.post('/signin',(request,response)=>
{
    const {email,password}=request.body
    

    const connection=db.openConnection()

    const encryptedPassword=cryptoJs.SHA256(password)

    statement=`select id, firstName,lastName,email from user where email= '${email}' and password='${encryptedPassword}'`
    
    connection.query(statement,(error,signinDetails)=>
    {
        connection.end()

        const result=utils.createResult(error,signinDetails)

        response.send(result)
    }
    )
    
})


module.exports=router