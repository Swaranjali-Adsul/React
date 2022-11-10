const mysql=require('mysql')

function openConnection()
{
    connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'blogs_db',
        port:3306

    })
    {
         connection.connect()
         return connection
    }
}


module.exports={
    openConnection
}