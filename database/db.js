import mysql from 'mysql'

var conn = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'123456789-r',
    database:'blood'
})


export default conn