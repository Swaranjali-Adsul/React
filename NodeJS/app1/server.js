const express=require('express')


const app=express()
app.use(express.json())


const routerBlog=require('./routes/blog')
const routerUser=require('./routes/user')
const routerCategory=require('./routes/category')


app.use('/blog',routerBlog)
app.use('/user',routerUser)
app.use('/category',routerCategory)



app.listen(4000,'0.0.0.0',()=>
{
    console.log('server started on port no 4000')
})