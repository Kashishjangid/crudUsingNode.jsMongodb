const dbConnect= require('./connection')

// const updateData= async()=>{
//     const data = await dbConnect();
//     const result = await data.updateOne(
//         {name:"C51"},{
//             $set:{name:'C52'}
//         }
//     )
//     console.log(result);
// }
const updateData= async()=>{
    const data = await dbConnect();
    const result = await data.updateMany(
        {name:"C52"},{
            $set:{name:'C51'}
        }
    )
    console.log(result);
}

updateData();