// import { json } from "stream/consumers"
// import conn from "../database/db.js"
// import { checkBYPhone } from "../models/user.model.js";

// export const alluser = async(req ,res) =>{
//     conn.connect(function(err){
//         if (err) throw err;
//         conn.query("select * from users",function (err ,result){
//             if(err) throw err;
//             res.status(200).json({status:"true",data: result})
//         })
//     })
// }

// export const reguser = async(req, res)=>{

//     let {name,phone_number,gender,availability,blood_group,location,password,cnfPassword} = req.body
//     try{
//         console.log(await checkBYPhone(phone_number))
//     }
//     catch{
//         console.log("inside catch")
//     }
//     // conn.connect(async(err)=>{
//     //     if (err) throw err;
//     //     const sql = `insert into users (name,phone_number,gender,availability,blood_group,location,password,cnfPassword)VALUES("${name}","${phone_number}","${gender}","${availability}","${blood_group}","${location}","${password}","${cnfPassword}")`
//     //     // const sql = `insert into users (name,phone_number,gender,availability,blood_group,location,password,cnfPassword)VALUES("${name}","09,8'765431","male","unavilable","o+",
//     //     // "coimbatore,Tn","12345678","12345678")`
//     //     try{
//     //     conn.query(sql,function(err,result){
//     //         // if (err) throw err.sqlMessage

//     //         console.log("hat",err)
//     //         if(err.sqlMessage == "Duplicate entry")
//     //         {
//     //             console.log("inside")
//     //         }
//     //         console.log("data inserted")
//     //     })
//     // }
//     // catch{
//     //     console.log("Internal error")
//     // }
//     // finally{
//     //      conn.query(`select * from users WHERE name="${phone_number}"`,function (err,result){
//     //         if (err) throw err.sqlMessage;
//     //         res.status(200).json({status:"true",data:result})
//     //     })
        
//     // }
//     // })
// }