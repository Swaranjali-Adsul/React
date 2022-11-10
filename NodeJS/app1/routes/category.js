const express=require('express')
const db=require('../database')
const router=express.Router()
const utils=require('../utils')



router.get('/',(request,response)=>
{
    const connection=db.openConnection()
    const statement=`select id,title from categories`

    connection.query(statement,(error,categories)=>
    {
        connection.end()
        const result=utils.createResult(error,categories)
        response.send(result)
    })
})


router.post('/',(request,response)=>
{
    const {title}=request.body
    const connection=db.openConnection()
    const statement=`insert into  categories (title) values ('${title}')`

    connection.query(statement,(error,categories)=>
    {
        connection.end()
        const result=utils.createResult(error,categories)
        response.send(result)
    })
})


router.post('/:id',(request,response)=>
{
    const {id}=request.params
    const connection=db.openConnection()
    const statement=`select id,title from categories where id='${id}'`

    connection.query(statement,(error,categories)=>
    {
        connection.end()
        const result=utils.createResult(error,categories)
        response.send(result)
    })
})


router.delete('/:id',(request,response)=>
{
    const {id}=request.params
    const connection=db.openConnection()
    const statement=`delete from categories where id='${id}'`

    connection.query(statement,(error,categories)=>
    {
        connection.end()
        const result=utils.createResult(error,categories)
        response.send(result)
    })
})

router.patch('/:id',(request,response)=>
{
    const {id}=request.params
    console.log(id)
    const {title}=request.body
    console.log(title)
    const connection=db.openConnection()
    const statement=`update categories set title='${title}' where id='${id}'`

    connection.query(statement,(error,categories)=>
    {
        connection.end()
        const result=utils.createResult(error,categories)
        response.send(result)
    })
})


module.exports=router